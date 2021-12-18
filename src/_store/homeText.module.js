import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const homeText = {
  namespaced: true,
  state: {
    home_text: '',
    home_id: '',
    pageUpdated: false,
    loaded: null,
  },
  actions: {
    async getHomeText({ commit, state }) {
      commit('pushLoadState', false);
      await axios.get(`/api/v1.0/homepages_text?id=${state.home_id}`) // /auth/getuser
        .then((resp) => {
          commit('pushHomeText', resp.data.text);
          commit('pushLoadState', true);
        }).catch((error) => {
          console.error(error);
        });
    },
    setUpdatedText({ commit, state }, payload) {
      // After successful PUT request
      commit('pushHomeText', state, payload);
    },
  },
  mutations: {
    pushHomeText(state, value) {
      state.home_text = `<div>${value}</div>`;
    },
    pushHomeID(state, value) {
      state.home_id = value;
    },
    pushLoadState(state, value) {
      state.loaded = value;
    },
  },
  getters: {
    getLoadState(state) {
      return state.loaded;
    },
    getPageText(state) {
      return state.home_text;
    },
  },
};
