import Vue from 'vue';
import Vuex from 'vuex';
import { createStore } from 'vuex-extensions';
import axios from 'axios';
import { currentUser } from './currentUser.module';
import { familyData } from './familyData.module';
import { genusData } from './genusData.module';
import { speciesText } from './speciesText.module';
import { speciesImages } from './speciesImages.module';
import { alert } from './alert.module';
import { homeText } from './homeText.module';
import { floraRecord } from './floraRecord.module';

Vue.use(Vuex);

// eslint-disable-next-line import/prefer-default-export
export default createStore(Vuex.Store, {
  modules: {
    currentUser,
    familyData,
    genusData,
    speciesText,
    speciesImages,
    alert,
    homeText,
    floraRecord,
  },
  // mixins are available via 'vuex-extensions'
  mixins: {
    actions: {
      // This is used by Family and Genus templates, checking species priority images.
      async checkSpeciesImages({ dispatch }, speciesData) {
        const checkedSpecies = speciesData.reduce((arr, s) => {
          const checkImages = speciesData.length <= 100;
          const plantId = s.plant_id;
          const placeholder = '/static/img/comingsoon_hover.png';
          let srcPath;
          let thumbPath;
          let hoverPath;
          function checkImagesAndSet() {
          // avoid checking the largest ones
            if (checkImages) {
              if (srcPath === placeholder) {
                // If the path is the placeholder, the source is the placeholder image & exists.
                Vue.set(s, 'srcExists', true);
              } else {
                fetch(srcPath)
                  .then((r) => {
                    Vue.set(s, 'srcExists', r.ok);
                  });
              }
            } else {
              // For really large family/genus groups, skip this checking to save load time.
              Vue.set(s, 'srcExists', true);
            }
            Vue.set(s, 'srcPath', srcPath);
            Vue.set(s, 'thumbPath', thumbPath);
            Vue.set(s, 'hoverPath', hoverPath);
            Vue.set(s, 'placeholder', placeholder);
            // console.log(s);
          }
          axios.get(`/api/v1.0/pimage_info?id=${plantId}`)
            .then((response) => {
              const path = `_pid_${plantId}`; // path corresponds to the species images directory on the backend
              if (response.data.image_id !== undefined) {
                srcPath = `/static/species_images/${path}/${response.data.image_id}.jpg`;
                thumbPath = `/static/species_images/${path}/thumb_${response.data.image_id}.jpg`;
                hoverPath = `/static/species_images/${path}/hover_${response.data.image_id}.jpg`;
                checkImagesAndSet();
              } else {
                // no priority image set for the species -- see if there's *any* image we can use
                axios.get(`/api/v1.0/allimage_info?id=${plantId}`)
                  .then((allImages) => {
                    console.log(allImages);
                    if (Array.isArray(allImages.data)) {
                      // There are other images. Get the first one and use it.
                      const firstImage = allImages.data[0];
                      srcPath = `/static/species_images/${path}/${firstImage.image_id}.jpg`;
                      thumbPath = `/static/species_images/${path}/thumb_${firstImage.image_id}.jpg`;
                      hoverPath = `/static/species_images/${path}/hover_${firstImage.image_id}.jpg`;
                    } else {
                      srcPath = placeholder;
                      thumbPath = placeholder;
                      hoverPath = placeholder;
                    }
                    checkImagesAndSet();
                  });
              }
            })
            .catch((error) => {
              console.error(error);
            });
          arr.push(s);
          // console.log(arr);
          return arr;
        }, []);
        return dispatch('setSpeciesData', checkedSpecies);
      },
    },
  },
});
