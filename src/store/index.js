import Vuex from 'vuex';
import Vue from 'vue';
import flights from './modules/flights/index'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: !!(
      typeof process !== 'undefined' && process.env.NODE_ENV === 'development'
    ),
    modules: {
        flights
    },
  });