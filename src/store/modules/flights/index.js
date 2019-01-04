import * as types from './mutation-types';
import get from '@/api/aircraftApi';
import totalFlyingTime from '@/models/common_functions';

export const state = {
  flightList: {
    isFetching: null,
    fetched: null,
    didInvalidate: null,
    data:{
        list:null,
        headers:null,
        totalFlyingTime:null
    }
  },
};

const actions = {
  fetchFlights({ commit }) {
    commit(types.REQUEST_FLIGHTS);
    return new Promise((resolve, reject) => {
      get('/flights')
        .then(({ data }) => {
          commit(types.RECEIVED_FLIGHTS, data);
          resolve('success');
        })
        .catch(e => {
          reject(e);
          commit(types.FLIGHTS_FAILURE);
        });
    });
  }
};
const mutations = {
  [types.REQUEST_FLIGHTS](state) {
    state.flightList.isFetching = true;
    state.flightList.fetched = false;
    state.flightList.didInvalidate = false;
  },
  [types.RECEIVED_FLIGHTS](state, data) {
    state.flightList.data.list = data;
    state.flightList.data.headers = Object.keys(data[0]);
    state.aircraftDetails.data.totalFlyingTime = totalFlyingTime(data)
    state.flightList.isFetching = false;
    state.flightList.fetched = true;
    state.flightList.didInvalidate = false;
  },
  [types.FLIGHTS_FAILURE](state) {
    state.flightList.isFetching = false;
    state.flightList.fetched = false;
    state.flightList.didInvalidate = true;
  }
};
const getters = {
  getFlightList(state) {
    return state.flightList.data.list;
  },
  getFlightListProperties(state){
      return state.flightList.data.headers
  },
  getTotalFlyingTime(state){
      return state.totalFlyingTime;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
