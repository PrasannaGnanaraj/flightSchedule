import * as types from "./mutation-types";
import get from "@/api/aircraftApi";
import * as common from "@/models/common_functions";

export const state = {
  flightList: {
    isFetching: null,
    fetched: null,
    didInvalidate: null,
    data: {
      list: null,
      headers: null,
      totalFlyingTime: null
    }
  },
  aircraft: {
    data: null
  }
};

const actions = {
  fetchFlights({ commit }) {
    commit(types.REQUEST_FLIGHTS);
    return new Promise((resolve, reject) => {
      get("/flights")
        .then(({ data }) => {
          commit(types.RECEIVED_FLIGHTS, data);
          resolve("success");
        })
        .catch(e => {
          reject(e);
          commit(types.FLIGHTS_FAILURE);
        });
    });
  },
  addFlightToCarrier({ commit }, args) {
    commit(types.ADD_FLIGHT, args);
    commit(types.SET_FLIGHT_TOTAL_TIME, args);
  },
  removeFlightToCarrier({ commit }, args) {
    commit(types.REMOVE_FLIGHT, args);
    commit(types.SET_FLIGHT_TOTAL_TIME, args);
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
    state.flightList.isFetching = false;
    state.flightList.fetched = true;
    state.flightList.didInvalidate = false;
  },
  [types.FLIGHTS_FAILURE](state) {
    state.flightList.isFetching = false;
    state.flightList.fetched = false;
    state.flightList.didInvalidate = true;
  },
  [types.ADD_FLIGHT](state, args) {
    const { carrierName, flightObject } = args;
    state.aircraft.data[carrierName].list.push(flightObject);
  },
  [types.REMOVE_FLIGHT](state, args) {
    const { carrierName, flightObject } = args;
    state.aircraft.data[carrierName].list = common.removeFromList(
      state.aircraft.data[carrierName].list,
      flightObject
    );
  },
  [types.SET_FLIGHT_TOTAL_TIME](state, args) {
    const { carrierName } = args;
    state.aircraft.data[carrierName].totalTime = common.totalFlyingTime(
      state.aircraft.data[carrierName].list
    );
  }
};
const getters = {
  getFlightList(state) {
    return state.flightList.data.list;
  },
  getFlightListProperties(state) {
    return state.flightList.data.headers;
  },
  getTotalFlyingTime(state) {
    return state.totalFlyingTime;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
