import axios from 'axios';
import router from '../router';

// eslint-disable-next-line import/prefer-default-export
export const speciesText = {
  namespaced: true,
  state: {
    species_id: '',
    species_sci_name: '',
    species_text: '',
    loading: '',
  },
  actions: {
    async getSpeciesText({ commit }) {
      commit('pushId', router.currentRoute.params.id);
      commit('pushLoadState', true);
      await axios.all([
        axios.get(`/api/v1.0/flora_search_sp?plant_id=${router.currentRoute.params.id}`),
        axios.get(`/api/v1.0/spec_text?id=${router.currentRoute.params.id}`),
        // eslint-disable-next-line camelcase
      ]).then(axios.spread((species, text) => {
        commit('pushSciName', species.data[0].scientific_name);
        commit('pushText', text.data.text);
      })).catch((error) => {
        console.error(error);
      });
      commit('pushLoadState', false);
    },
    setUpdatedText({ commit, state }, payload) {
      // After successful PUT request
      commit('pushTextUpdate', state, payload);
    },
  },
  mutations: {
    pushId(state, id) {
      state.species_id = id;
    },
    pushSciName(state, name) {
      state.species_sci_name = name;
    },
    pushText(state, text) {
      // eslint-disable-next-line array-callback-return
      state.species_text = text;
    },
    pushTextUpdate(state, text) {
      // Edited text
      state.species_text = text;
    },
    pushLoadState(state) {
      state.loading = state;
    },
  },
  getters: {
    species_id(state) {
      return state.species_id;
    },
    species_sci_name(state) {
      return state.species_sci_name;
    },
    species_text(state) {
      return state.species_text;
    },
    loadState(state) {
      return state.loading;
    },
  },
};
