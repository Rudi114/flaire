import { create } from '../../api';

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
};

const actions = {
  signUp: async ({ commit, state }) => {
    commit('setLoading', true);
    try {
      return create('signUp', state.newUser)
        .then((res) => {
          console.log(res);
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
    console.log(state.userCreds);
    try {
      return create('login', state.userCreds)
        .then(() => {
          commit('setLoading', false);
        });
    } catch (err) {
      commit('setLoading', false);
    }
    commit('setLoading', false);
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
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
