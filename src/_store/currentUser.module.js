import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const currentUser = {
  namespaced: true,
  state: {
    first_name: '',
    email: '',
    authenticated: false,
    admin: false,
  },
  actions: {
    async getCurrentUser({ commit }) {
      // development url: http://localhost:5000/auth/getuser
      // production url: /auth/getuser
      await axios.get('/auth/getuser')
        .then((resp) => {
          commit('loadUser', resp);
        }).catch((error) => {
          console.error(error);
        });
    },
  },
  mutations: {
    loadUser(state, resp) {
      // eslint-disable-next-line array-callback-return
      state.first_name = resp.data.first_name;
      state.email = resp.data.email;
      state.authenticated = resp.data.authenticated;
      state.admin = resp.data.admin;
    },
  },
  getters: {
    userFirstName(state) {
      return state.first_name;
    },
    userEmail(state) {
      return state.email;
    },
    userAuthenticated(state) {
      return state.authenticated;
    },
    userAdmin(state) {
      return state.admin;
    },
  },
};
