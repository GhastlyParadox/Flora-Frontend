import axios from 'axios';
import router from '../router';

// This module is used for the image manager. FloraRecord gets its own image data.

// eslint-disable-next-line import/prefer-default-export
export const speciesImages = {
  namespaced: true,
  state: {
    id: '', // plant_id
    path: '', // relative path for the backend
    scientific_name: '',
    priorityImageObj: {
      priorityImageId: '',
      priorityImageSrc: '',
      priorityImageSrcHover: '',
      priorityImagePhotographer: '',
    },
    selectedImageObj: {},
    selectedImagePriority: false,
    requestEnRoute: false,
    success: null,
    imageData: [],
    loading: false,
  },
  actions: {
    async getSpeciesImages({ commit, getters }) {
      const path = `_pid_${router.currentRoute.params.id}`;
      commit('pushPath', path);
      commit('pushId', router.currentRoute.params.id);
      commit('pushLoadState', true);
      await axios.all([
        axios.get(`/api/v1.0/flora_search_sp?plant_id=${router.currentRoute.params.id}`),
        axios.get(`/api/v1.0/pimage_info?id=${router.currentRoute.params.id}`),
        axios.get(`/api/v1.0/allimage_info?id=${router.currentRoute.params.id}`),
        // axios.get(`http://localhost:5000/api/v1.0/flora_search_sp?plant_id=${router.currentRoute.params.id}`),
        // axios.get(`http://localhost:5000/api/v1.0/pimage_info?id=${router.currentRoute.params.id}`),
        // axios.get(`http://localhost:5000/api/v1.0/allimage_info?id=${router.currentRoute.params.id}`),
        // eslint-disable-next-line camelcase
      ]).then(axios.spread((species, pimage, images) => {
        commit('pushSciName', species.data[0].scientific_name);
        if (pimage.data.image_id != null) {
          // commit('pushPriorityImageSrc', `http://localhost:5000/static/species_images/${path}/${pimage.data.image_id}.jpg`);
          commit('pushPriorityImageSrc', `/static/species_images/${path}/${pimage.data.image_id}.jpg`);
          // commit('pushPriorityImageSrcHover', `http://localhost:5000/static/species_images/${path}/hover_${pimage.data.image_id}.jpg`);
          commit('pushPriorityImageSrcHover', `/static/species_images/${path}/hover_${pimage.data.image_id}.jpg`);
          commit('pushPriorityImagePhotographer', pimage.data.photographer);
          // commit('pushPriorityImageObj', pimage.data);
        }
        if (Array.isArray(images.data)) {
          const imageData = images.data.reduce((acc, e) => {
            const obj = {};
            obj.image_id = e.image_id;
            // obj.src = `http://localhost:5000/static/species_images/${path}/${e.image_id}.jpg`;
            obj.src = `/static/species_images/${path}/${e.image_id}.jpg`;
            // obj.thumb = `http://localhost:5000/static/species_images/${path}/hover_${e.image_id}.jpg`;
            obj.thumb = `/static/species_images/${path}/hover_${e.image_id}.jpg`;
            obj.photographer = e.photographer !== 'NULL' ? e.photographer : '';
            obj.caption = e.caption !== 'NULL' ? e.caption : '';
            obj.priority = obj.src === getters.priorityImageSrc; // Boolean for priority image obj
            acc.push(obj);
            return acc;
            // eslint-disable-next-line array-callback-return,consistent-return,max-len
          }, []).sort((a, b) => { if (b.priority === true) return 1; }); // Move priority image obj to front.
          commit('pushImageData', imageData);
          commit('pushLoadState', false);
        }
      })).catch((error) => {
        console.error(error);
      });
    },
    setSelectedImageObj({ commit }, obj) {
      commit('pushSelectedImageObj', obj);
    },
    // eslint-disable-next-line no-unused-vars
    setSelectedImageAsPriority({ commit, state, getters }, imageId) {
      const that = this;
      const requestObj = new FormData();
      requestObj.append('image_id', imageId);
      // that.loaderOverlay = true;
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data; charset=utf-8',
        },
        method: 'put',
      };
      that.requestEnRoute = true;
      axios.put(`/admin/fm/species-images/set-priority/${getters.id}?path=${getters.path}`, requestObj, config).then((response) => {
        console.log(response.config.data);
        that.requestEnRoute = false;
        that.success = true;
        console.log('Priority image set successfully');
      }).catch((error) => {
        // that.loaderOverlay = false;
        that.requestEnRoute = false;
        that.errorMsg = error;
        console.error(error);
      });
    },
  },
  mutations: {
    pushId(state, id) {
      state.id = id;
    },
    pushPath(state, path) {
      state.path = path;
    },
    pushSciName(state, name) {
      state.scientific_name = name;
    },
    pushPriorityImageSrc(state, value) {
      state.priorityImageObj.priorityImageSrc = value;
    },
    pushPriorityImageSrcHover(state, value) {
      state.priorityImageObj.priorityImageHover = value;
    },
    pushPriorityImagePhotographer(state, value) {
      state.priorityImageObj.priorityImagePhotographer = value;
    },
    pushPriorityImageObj(state, obj) {
      state.priorityImageObj = obj;
    },
    pushImageData(state, payload) {
      state.imageData = payload;
    },
    pushLoadState(state, value) {
      state.loading = value;
    },
    pushSelectedImageObj(state, obj) {
      state.selectedImageObj = obj;
    },
    pushSelectedImageAsPriority(state, value) {
      state.selectedImagePriority = value;
    },
  },
  getters: {
    id(state) {
      return state.id;
    },
    path(state) {
      return state.path;
    },
    scientific_name(state) {
      return state.scientific_name;
    },
    imageData(state) {
      return state.imageData;
    },
    priorityImageSrc(state) {
      return state.priorityImageObj.priorityImageSrc;
    },
    priorityImageSrcHover(state) {
      return state.priorityImageObj.priorityImageSrcHover;
    },
    priorityImagePhotographer(state) {
      return state.priorityImageObj.priorityImagePhotographer;
    },
    priorityImageObject(state) {
      return state.priorityImageObject;
    },
    loadState(state) {
      return state.loading;
    },
    selectedImageObj(state) {
      return state.selectedImageObj;
    },
    selectedImagePriority(state) {
      return state.selectedImagePriority;
    },
  },
};
