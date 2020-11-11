import Vue from 'vue';
import Vuex from 'vuex';
import state from '@/store/modules/state';
import authentication from '@/store/modules/authentication'
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    state,
    authentication
  }
});

export default store;
