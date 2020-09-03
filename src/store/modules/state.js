import { create } from '../../api';
import Vue from "vue";
import VueCookies from "vue-cookies"

Vue.use(VueCookies);

const state = {
  signUp: false, // modal
  newUser: {
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    giftCode: null,
    promoCode: 'null',
  },
  userCreds: {
    username: '',
    password: '',
  },
  giftInfo: {
    email: '',
    buyerName: '',
    promoCode: null,
  },
  loading: false,
  gift: false, // modal
  promo: false, // modal
  card: false, // modal
  errorMessage: "",
  loginError: ""
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
  },
  setUserCreds(state, userCreds) {
    state.userCreds = userCreds;
  },
  setGiftInfo(state, giftInfo) {
    state.giftInfo = giftInfo;
  },
  setErrorMessage(state, errorMessage) {
    state.errorMessage = errorMessage;
  },
  setLoginError(state, loginError) {
    state.loginError = loginError;
  }
};

const actions = {
  signUp: async ({ commit, state }) => {
    commit('setLoading', true);
    return new Promise((resolve, reject) => {
      create('signUp', state.newUser)
        .then(async (res) => {
          let result = await res.json();
          if (result === 2) {
            commit("authentication/setAuthenticated", true, { root: true });
            commit('setLoading', false);
            commit("setErrorMessage", "");
            resolve();
          } else if (result === 1) {
            reject();
            commit("setErrorMessage", "This email is already associated with another account!");
            commit('setLoading', false);
          } else {
            reject();
            commit("setErrorMessage", "An error has occured!");
            commit('setLoading', false);
          }        
        })
        .catch(() => {
          reject(); 
          commit("setErrorMessage", "An error has occured!");
          commit('setLoading', false);
        })
    });
  },
  resetPassword: async ({ commit, state }, payload) => {
    commit('setLoading', true);
    try {
      return create('forgotPassword', payload)
        .then(() => {
          commit('setLoading', false);
        });
    } catch (err) {
      console.warn('err signing up: ', err);
      commit('setLoading', false);
    }
    commit('setLoading', false);
  },
  logIn: async ({ commit, state }) => {
    commit('setLoading', true);
    return new Promise((resolve, reject) => {
      create('login', state.userCreds)
        .then(async (res) => {
          let result = await res.json();
          if (result === 0) {
            resolve();
            commit("authentication/setAuthenticated", true, { root: true });
            commit('setLoading', false);
            commit("setLoginError", "");
          } else {
            reject();
            commit('setLoading', false);
            commit("setLoginError", "Incorrect Email or Password!");
          }
        })
        .catch(() => {
          reject();
          commit('setLoading', false);
          commit("setLoginError", "Incorrect Email or Password!");
        });
    });
  },
  sendGift: async ({ commit, state }) => {
    try {
      return create('checkout', state.giftInfo)
        .then(() => {
          commit('setLoading', false);
        });
    } catch (err) {
      commit('setLoading', false);
    }
    commit('setLoading', false);
  },
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
  },
  getUserCreds(state) {
    return state.userCreds;
  },
  getGiftInfo(state) {
    return state.giftInfo;
  },
  getErrorMessage(state) {
    return state.errorMessage;
  },
  getLoginError(state) {
    return state.loginError;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
