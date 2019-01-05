<template>
  <div class="container-fluid">
    <div class="d-flex flex-row bd-highlight mb-3">
      <div class="p-2 bd-highlight">
        <aircraftList></aircraftList>
      </div>
      <div class="p-2 flex-grow-1 bd-highlight">
        <aricraftRotation></aricraftRotation>
      </div>
      <div class="p-2 bd-highlight">
        <flightList></flightList>
      </div>
    </div>
  </div>
</template>
<script>
import flightList from "@/components/flightList/flightList.vue";
import aircraftList from "@/components/airCraftDetails/airCraftDetails.vue";
import aricraftRotation from "@/components/aircraftFlightRotation/aircraftFlightRotation.vue";
import { mapActions } from "vuex";
export default {
  components: {
    flightList,
    aircraftList,
    aricraftRotation
  },
  methods: {
    ...mapActions(["fetchFlights", "fetchAircrafts"])
  },
  mounted() {
    this.fetchFlights();
    this.fetchAircrafts();
  }
};
</script>
