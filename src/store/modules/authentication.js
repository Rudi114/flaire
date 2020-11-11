const state = {
  authenticated: false
};

const getters = {
  getAuthenticated(state) {
    return state.authenticated;
  }
};

const actions = {};

const mutations = {
  setAuthenticated(state, payload) {
    state.authenticated = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};