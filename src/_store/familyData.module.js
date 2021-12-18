import axios from 'axios';
import router from '../router';

// eslint-disable-next-line import/prefer-default-export
export const familyData = {
  namespaced: true,
  state: {
    isSubmitted: false,
    family_name: '',
    family_text: '',
    family_species: [],
    loaded: null,
  },
  actions: {
    isSubmitted: state => state.isSubmitted,
    async getFamilyText({ commit, dispatch }) {
      commit('pushTextReset');
      await axios.get(`/api/v1.0/family_text?id=${router.currentRoute.params.family_name}`)
        .then((text) => {
          // console.log('Family text fetched');
          commit('pushFamilyName', router.currentRoute.params.family_name);
          dispatch('setFamilyText', text.data.text);
        });
    },
    async getFamilyData({ commit, dispatch }) {
      commit('pushLoadState', false); // data loading
      commit('pushSpeciesDataReset');
      // console.log('getting family data...');
      await axios.get(`/api/v1.0/flora_search?family=${router.currentRoute.params.family_name}&n_results=0`)
        .then((species) => {
          // console.log('Family data fetched');
          // Vuex mixin 'checkSpeciesImages' checks and commits images (_store/index.js)
          dispatch('checkSpeciesImages', species.data);
        });
    },
    setSpeciesData({ commit }, speciesData) {
      commit('pushSpeciesData', speciesData);
      commit('pushLoadState', true); // data loaded
    },
    setFamilyText({ commit }, textData) {
      commit('pushFamilyText', textData);
    },
    setUpdatedText({ commit, state }, updatedText) {
      // After successful PUT request from EditFamily component
      commit('pushTextUpdate', state, updatedText);
    },
    setLoadState({ commit, state }, loadState) {
      commit('pushLoadState', state, loadState);
    },
    speciesDataReset({ commit }) {
      commit('pushSpeciesReset');
    },
    familyTextReset({ commit }) {
      commit('pushTextReset');
    },
  },
  mutations: {
    pushFamilyName(state, name) {
      state.family_name = name;
    },
    pushFamilyText(state, text) {
      // Initial push
      state.family_text = text !== undefined ? `<div>${text}</div>` : '';
    },
    pushSpeciesData(state, speciesData) {
      state.family_species = speciesData;
    },
    pushLoadState(state, loadState) {
      state.loaded = loadState;
    },
    pushTextUpdate(state, textUpdate) {
      // Edited text
      state.family_text = textUpdate;
    },
    pushTextReset(state) {
      state.family_text = '';
    },
    pushSpeciesDataReset(state) {
      state.family_species = [];
    },
  },
  getters: {
    loadState(state) {
      return state.loaded;
    },
    getName(state) {
      return state.family_name;
    },
    getText(state) {
      return state.family_text;
    },
  },
};
