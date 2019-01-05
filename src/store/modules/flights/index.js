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
      pagination: { offset: 0, limit: 0, total: 0 }
    }
  },
  aircraftList: {
    isFetching: null,
    fetched: null,
    didInvalidate: null,
    data: {
      list: null,
      headers: null,
      pagination: { offset: 0, limit: 0, total: 0 }
    }
  }
};

const actions = {
  fetchFlights({ commit, state }, pageNo = 1) {
    commit(types.SET_FLIGHT_LIST_OFFSET, pageNo);
    commit(types.REQUEST_FLIGHTS);
    return new Promise((resolve, reject) => {
      get(
        `${common.FLIGHTS_ENDPOINT}?offset=${
          state.flightList.data.pagination.offset
        }`
      )
        .then(res => {
          commit(types.RECEIVED_FLIGHTS, res);
          resolve("success");
        })
        .catch(e => {
          reject(e);
          commit(types.FLIGHTS_FAILURE);
        });
    });
  },
  fetchAircrafts({ commit, state }, pageNo = 1) {
    commit(types.SET_AIRCRAFT_LIST_OFFSET, pageNo);
    commit(types.REQUEST_AIRCRAFTS);
    return new Promise((resolve, reject) => {
      get(
        `${common.AIRCRAFT_ENDPOINT}?offset=${
          state.aircraftList.data.pagination.offset
        }`
      )
        .then(res => {
          commit(types.RECEIVED_AIRCRAFTS, res);
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
  [types.RECEIVED_FLIGHTS](state, res) {
    const { data, pagination } = res;
    state.flightList.data.list = data;
    state.flightList.data.pagination = pagination;
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
  [types.RECEIVED_AIRCRAFTS](state, res) {
    const { data, pagination } = res;
    state.aircraftList.data.list = data;
    state.aircraftList.data.pagination = pagination;
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
  [types.SET_FLIGHT_LIST_OFFSET](state, pageNo) {
    state.flightList.data.pagination.offset =
      (pageNo - 1) * state.flightList.data.pagination.limit;
  },
  [types.SET_AIRCRAFT_LIST_OFFSET](state, pageNo) {
    state.aircraftList.data.pagination.offset =
      (pageNo - 1) * state.aircraftList.data.pagination.limit;
  }
};
const getters = {
  getFlightList(state) {
    return state.flightList.data.list;
  },
  getFlightListProperties(state) {
    return state.flightList.data.headers;
  },
  getAircraftList(state) {
    return state.aircraftList.data.list;
  },
  getTotalFlyingTime(state) {
    return state.totalFlyingTime;
  },
  getTotalFlightCount(state) {
    return state.flightList.data.pagination.total;
  },
  getTotalFlightOffset(state) {
    return state.flightList.data.pagination.offset;
  },
  getTotalAircraftCount(state) {
    return state.aircraftList.data.pagination.total;
  },
  getFlightListLimit(state) {
    return state.flightList.data.pagination.limit;
  },
  getAircraftListLimit(state) {
    return state.aircraftList.data.pagination.limit;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
