import Vue from 'vue';
import Vuex from 'vuex';
import state from './modules/state.js'
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    state
  }
});

export default store;
