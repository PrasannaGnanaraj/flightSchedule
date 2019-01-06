<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: grey;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #cabcbc;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>

<template>
  <div class="container-fluid">
    <div class="d-flex flex-row p-2">
      <aircraftList></aircraftList>
      <div class="p-2 flex-grow-1">
        <aricraftRotation class="bg-light" style="overflow-y:scroll"></aricraftRotation>
      </div>
      <flightList></flightList>
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
