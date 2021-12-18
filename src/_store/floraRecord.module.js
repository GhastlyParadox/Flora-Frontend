import axios from 'axios';
import Vue from 'vue';
import router from '../router';


function getInitialData() {
  return {
    plant_id: '',
    scientific_name: '',
    c: '',
    w: null,
    wet: '',
    phys: '',
    na: '',
    st: '',
    family_name: '',
    genus: '',
    common_name: [],
    text: '',
    image_id: '',
    caption: '',
    locs: [],
    author: '',
    n_results: null,
  };
}

// eslint-disable-next-line import/prefer-default-export
export const floraRecord = {
  namespaced: true,
  state: {
    isSubmitted: false,
    recordData: getInitialData(),
    floraData: [],
    textData: '',
    priorityFileExists: null,
    priorityImageSrc: '',
    priorityImageSrcHover: '',
    priorityImagePhotographer: '',
    priorityImageCaption: '',
    imageData: [],
    mapBaseURL: '',
    locationData: [],
    loaded: false,
  },
  actions: {
    isSubmitted: state => state.isSubmitted,
    async getRecordData({ commit, dispatch, getters }) {
      commit('pushLoadState', false); // data loading
      commit('pushImageDataReset'); // to keep image data in sync with route changes
      const path = `_pid_${router.currentRoute.params.id}`; // path to image folder
      await axios.all([
        axios.get(`/api/v1.0/flora_search_sp?plant_id=${router.currentRoute.params.id}`),
        axios.get(`/api/v1.0/spec_text?id=${router.currentRoute.params.id}`),
        axios.get(`/api/v1.0/pimage_info?id=${router.currentRoute.params.id}`),
        axios.get(`/api/v1.0/allimage_info?id=${router.currentRoute.params.id}`),
        axios.get(`/api/v1.0/locs_sp?id=${router.currentRoute.params.id}`),
      ]).then(axios.spread((flora, text, pimage, images, locations) => {
        commit('pushText', text.data.text);
        dispatch('responseFilter', flora.data); // responseFilter pushes the object
        if (pimage.data.image_id) { // for species with priority image assigned
          // console.log('priority image found');
          commit('pushPriorityImageSrc', `/static/species_images/${path}/${pimage.data.image_id}.jpg`);
          commit('pushPriorityImageSrcHover', `/static/species_images/${path}/hover_${pimage.data.image_id}.jpg`);
          commit('pushPriorityImagePhotographer', pimage.data.photographer);
          commit('pushPriorityImageCaption', pimage.data.caption === 'NULL' ? '' : pimage.data.caption);
        } else {
          // No primary image; clear these fields
          commit('pushPriorityImageSrc', '');
          commit('pushPriorityImageSrcHover', '');
          commit('pushPriorityImagePhotographer', '');
          commit('pushPriorityImageCaption', '');
        }
        if (Array.isArray(images.data)) {
          const imageData = images.data.reduce((arr, e) => {
            const src = `/static/species_images/${path}/${e.image_id}.jpg`;
            const thumb = `/static/species_images/${path}/hover_${e.image_id}.jpg`;
            const placeholder = '/static/img/comingsoon_hover.png';
            // Vue.set (vs. obj.prop) needed for reactivity on objects
            Vue.set(e, 'src', src);
            Vue.set(e, 'thumb', thumb);
            Vue.set(e, 'exists', null);
            Vue.set(e, 'placeholder', placeholder);
            Vue.set(e, 'subHtml', `<div style="font-size:75%;left:20%;position:relative">${e.photographer}</div></div><p style="text-align:center;">${e.caption && e.caption !== 'NULL' ? e.caption : ''}</p>`);
            Vue.set(e, 'alt', e.caption);
            Vue.set(e, 'priority', src === getters.priorityImageSrc);
            arr.push(e);
            return arr;
            // eslint-disable-next-line array-callback-return,consistent-return,max-len
          }, []).sort((a, b) => { if (b.priority === true) return 1; }); // Move priority image to front.
          dispatch('imageFileCheck', imageData); // imageFileCheck filters and pushes the object
        } else {
          // If no images available:
          const imageData = {};
          imageData.src = '/static/img/comingsoon_hover.png';
          imageData.thumb = imageData.src;
          imageData.subHtml = 'No photos available';
          commit('pushImageData', [imageData]);
        }
        const locationData = locations.data.locations.reduce((arr, e) => {
          arr.push(e);
          return arr;
        }, []);
        commit('pushLocationData', locationData);
        commit('pushMapBaseURL', `https://mifloradev.lsa.umich.edu/mi-flora-webmap/index_map_only.html?plant_id=${router.currentRoute.params.id}`);
        commit('pushLoadState', true); // state loaded
      })).catch((error) => {
        console.error(error);
      });
    },
    async responseFilter({ commit, getters }, data) {
      if (Object.prototype.toString.call(data) === '[object Object]') {
        const respArr = [];
        respArr.push(data);
        return this.responseFilter(respArr);
      }
      // Get recordData keys
      const keys = Object.entries(getters.recordData).reduce((arr, e) => {
        arr.push(e[0]);
        return arr;
      }, []);
      // Filter and map
      return data.reduce((arr, e) => {
        const newObj = {};
        Object.keys(e).forEach((key) => {
          // eslint-disable-next-line no-unused-expressions
          keys.includes(key) ? newObj[key] = e[key] : null;
        });
        // eslint-disable-next-line prefer-destructuring
        newObj.genus = newObj.scientific_name.split(' ', 1)[0];
        arr.push(newObj);
        return commit('pushFloraData', arr);
      }, []);
    },
    imageFileCheck({ commit }, imageData) {
      // check each file with a fetch request, update accordingly
      const checkedImages = imageData.reduce((arr, img) => {
        const checkedImage = { ...img };
        fetch(img.src).then((response) => {
          checkedImage.exists = response.ok;
        });
        arr.push(checkedImage);
        return arr;
      }, []);
      commit('pushImageData', checkedImages);
    },
  },
  mutations: {
    pushText(state, payload) {
      state.textData = payload !== undefined ? `<div>${payload}</div>` : '';
    },
    pushFloraData(state, payload) {
      state.floraData = payload;
    },
    pushPriorityImageSrc(state, payload) {
      state.priorityImageSrc = payload;
    },
    pushPriorityImageSrcHover(state, payload) {
      state.priorityImageSrcHover = payload;
    },
    pushPriorityImagePhotographer(state, payload) {
      state.priorityImagePhotographer = payload;
    },
    pushPriorityImageCaption(state, payload) {
      state.priorityImageCaption = payload;
    },
    pushImageData(state, payload) {
      state.imageData = payload;
    },
    pushImageDataReset(state) {
      state.imageData = [];
    },
    pushMapBaseURL(state, payload) {
      state.mapBaseURL = payload;
    },
    pushLocationData(state, payload) {
      state.locationData = payload;
    },
    pushLoadState(state) {
      state.loaded = state;
    },
  },
  getters: {
    loadState(state) {
      return state.loaded;
    },
    floraData(state) {
      return state.floraData;
    },
    recordData(state) {
      return state.recordData;
    },
    locationData(state) {
      return state.locationData;
    },
    mapBaseURL(state) {
      return state.mapBaseURL;
    },
    imageData(state) {
      return state.imageData;
    },
    priorityImageSrc(state) {
      return state.priorityImageSrc;
    },
    textData(state) {
      return state.textData;
    },
    priorityImageSrcHover(state) {
      return state.priorityImageSrcHover;
    },
    priorityImagePhotographer(state) {
      return state.priorityImagePhotographer;
    },
  },
};
