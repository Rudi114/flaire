
const state = {
  signUp: false, // modal
  newUser: {
    name: "",
    email: "",
    password: "",
    phone: ""
  },
  loading: false,
  gift: false, // modal
  promo: false, // modal
  card: false, // modal
};

const mutations = {
  setSignUp(state, signUp) {
    state.signUp = signUp;
  },
  setNewUser(state, newUser) {
    state.newUser = newUser;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  setGift(state, gift) {
    state.gift = gift;
  },
  setPromo(state, promo) {
    state.promo = promo;
  },
  setCard(state, card) {
    state.card = card;
  }
};

const actions = {
  signUp: async ({ commit }) => {
    commit("setLoading", true);
    // try {
    //   return signUp(route, newUser) //add signUp
    //     .then(() => {
    //       commit("setLoading", false);
    //     })
    // }
    // catch (err) {
    //   commit("setLoading", false);
    // }
    commit("setLoading", false);
    return;
  },
  logIn: async ({ commit }) => {
    commit("setLoading", true);
    // try {
    //   return authenticate(route, newUser) //add authentication
    //     .then(() => {
    //       commit("setLoading", false);
    //     })
    // }
    // catch (err) {
    //   commit("setLoading", false);
    // }
    commit("setLoading", false);
    return;
  }
};

const getters = {
  getSignUp(state) {
    return state.signUp;
  }, 
  getNewUser(state) {
    return state.newUser;
  },
  getLoading(state) {
    return state.loading;
  },
  getGift(state) {
    return state.gift;
  },
  getPromo(state) {
    return state.promo;
  },
  getCard(state) {
    return state.card;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}