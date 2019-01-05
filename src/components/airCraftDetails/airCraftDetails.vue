<template>
  <div>
    <h5>Available Aircrafts</h5>
    <div
      :class="{card:'true','bg-primary':setActive(aircraft.ident),'text-white':setActive(aircraft.ident)}"
      v-for="aircraft in aircraftList"
      v-bind:key="aircraft.ident"
      style="width:10em"
    >
      <div class="card-body" @click="handleAircraftClick(aircraft.ident)">
        <h5 class="card-title">{{aircraft.ident}}</h5>
        <div class="d-flex flex-row bd-highlight mb-3" style="font-size:0.7em">
          <div class="p-2 bd-highlight">
            <b class="d-block">Type</b>
            {{aircraft.type}}
          </div>
          <div class="p-2 bd-highlight">
            <b class="d-block">Base</b>
            {{aircraft.base}}
          </div>
          <div class="p-2 bd-highlight">
            <b class="d-block">Seats</b>
            {{aircraft.economySeats}}
          </div>
        </div>
        <div class="progress" v-if="currentAircraft">
          <div
            class="progress-bar progress-bar-striped bg-success"
            role="progressbar"
            :style="{width:`${(aircraftCarrierData[currentAircraft].utilization/24)*100}%`}"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import * as mutation from "@/store/modules/flights/mutation-types";
export default {
  computed: {
    ...mapGetters({
      aircraftList: "getAircraftList",
      currentAircraft: "getCurrentAircraft",
      aircraftCarrierData: "getAircraftCarrierData"
    })
  },
  methods: {
    handleAircraftClick(id) {
      this.$store.commit(mutation.SELECT_AIRCRAFT, id);
    },
    setActive(id) {
      return id === this.currentAircraft;
    }
  }
};
</script>