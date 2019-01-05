<template>
  <div>
    <h5>Available Aircrafts</h5>
    <div
      class="card"
      v-for="aircraft in aircraftList"
      v-bind:key="aircraft.ident"
      style="width:10em"
    >
      <div class="card-body">
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
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      totalFlyingTime: "getTotalFlyingTime",
      aircraftList: "getAircraftList"
    })
  }
};
</script>