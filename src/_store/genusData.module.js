import axios from 'axios';
import router from '../router';

// eslint-disable-next-line import/prefer-default-export
export const genusData = {
  namespaced: true,
  state: {
    isSubmitted: false,
    genus_name: '',
    genus_text: '',
    genus_species: [],
    loaded: null,
  },
  actions: {
    isSubmitted: state => state.isSubmitted,
    async getGenusText({ commit, dispatch }) {
      commit('pushTextReset');
      await axios.get(`/api/v1.0/genus_text?id=${router.currentRoute.params.genus_name}`)
        .then((text) => {
          commit('pushName', router.currentRoute.params.genus_name);
          dispatch('setGenusText', text.data.text);
        });
    },
    async getGenusData({ commit, dispatch }) {
      commit('pushLoadState', false); // data loading
      commit('pushSpeciesDataReset');
      await axios.get(`/api/v1.0/flora_search?genus=${router.currentRoute.params.genus_name}&n_results=0`)
        .then((species) => {
        // Vuex mixin 'checkSpeciesImages' checks and commits images (_store/index.js)
          dispatch('checkSpeciesImages', species.data);
        });
    },
    setSpeciesData({ commit }, speciesData) {
      commit('pushSpeciesData', speciesData);
      commit('pushLoadState', true); // data loaded
    },
    setGenusText({ commit }, textData) {
      commit('pushGenusText', textData);
    },
    setUpdatedText({ commit, state }, updatedText) {
      // Called by EditGenus
      commit('pushTextUpdate', state, updatedText);
    },
    setLoadState({ commit, state }, loadState) {
      commit('pushLoadState', state, loadState);
    },
    speciesDataReset({ commit }) {
      commit('pushSpeciesReset');
    },
    genusTextReset({ commit }) {
      commit('pushTextReset');
    },
  },
  mutations: {
    pushName(state, name) {
      state.genus_name = name;
    },
    pushGenusText(state, text) {
      // Initial push
      state.genus_text = text !== undefined ? `<div>${text}</div>` : '';
    },
    pushTextUpdate(state, textUpdate) {
      // Edited text
      state.genus_text = textUpdate;
    },
    pushTextReset(state) {
      state.genus_text = '';
    },
    pushSpeciesData(state, speciesData) {
      state.genus_species = speciesData;
    },
    pushSpeciesDataReset(state) {
      state.genus_species = [];
    },
    pushLoadState(state, loadState) {
      state.loaded = loadState;
    },
  },
  getters: {
    loadState(state) {
      return state.loaded;
    },
    getName(state) {
      return state.genus_name;
    },
    getText(state) {
      return state.genus_text;
    },
    getSpecies(state) {
      return state.genus_species;
    },
  },
};
