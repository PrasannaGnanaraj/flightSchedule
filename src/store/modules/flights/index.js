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
      offset: 0,
      limit: 0
    }
  },
  aircraftList: {
    isFetching: null,
    fetched: null,
    didInvalidate: null,
    data: {
      list: null,
      headers: null,
      offset: 0,
      limit: 0
    }
  }
};

const actions = {
  fetchFlights({ commit, state }, args = {}) {
    commit(types.SET_FLIGHT_LIST_OFFSET, args);
    commit(types.REQUEST_FLIGHTS);
    return new Promise((resolve, reject) => {
      get(`${common.FLIGHTS_ENDPOINT}?offset=${state.flightList.data.offset}`)
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
  fetchAircrafts({ commit, state }, args = {}) {
    commit(types.SET_AIRCRAFT_LIST_OFFSET, args);
    commit(types.REQUEST_AIRCRAFTS);
    return new Promise((resolve, reject) => {
      get(
        `${common.AIRCRAFT_ENDPOINT}?offset=${state.aircraftList.data.offset}`
      )
        .then(({ data }) => {
          commit(types.RECEIVED_AIRCRAFTS, data);
          resolve("success");
        })
        .catch(e => {
          reject(e);
          commit(types.AIRCRAFTS_FAILURE);
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
  [types.REQUEST_AIRCRAFTS](state) {
    state.aircraftList.isFetching = true;
    state.aircraftList.fetched = false;
    state.aircraftList.didInvalidate = false;
  },
  [types.RECEIVED_AIRCRAFTS](state, data) {
    state.aircraftList.data.list = data;
    state.aircraftList.data.headers = Object.keys(data[0]);
    state.aircraftList.isFetching = false;
    state.aircraftList.fetched = true;
    state.aircraftList.didInvalidate = false;
  },
  [types.AIRCRAFTS_FAILURE](state) {
    state.aircraftList.isFetching = false;
    state.aircraftList.fetched = false;
    state.aircraftList.didInvalidate = true;
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
  },
  [types.SET_FLIGHT_LIST_OFFSET](state, args) {
    const { prev = null, next = null } = args;
    if (prev) {
      state.flightList.data.offset += state.flightList.data.limit;
    } else if (next) {
      state.flightList.data.offset -= state.flightList.data.limit;
    }
  },
  [types.SET_AIRCRAFT_LIST_OFFSET](state, args) {
    const { prev = null, next = null } = args;
    if (prev) {
      state.aircraftList.data.offset += state.aircraftList.data.limit;
    } else if (next) {
      state.aircraftList.data.offset -= state.aircraftList.data.limit;
    }
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
