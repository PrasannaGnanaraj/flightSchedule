import flightDetails from "@/components/flightDetails/flightDetails.vue";
import { mapGetters } from "vuex";
import { ADD_FLIGHT } from "@/store/modules/flights/mutation-types";
export default {
  data() {
    return {
      event: null
    };
  },
  components: {
    flightDetails
  },
  computed: {
    ...mapGetters({
      aircraftCarrierData: "getAircraftCarrierData",
      currentAircraft: "getCurrentAircraft"
    }),
    flightIds: {
      get() {
        if (this.currentAircraft) {
          return this.$store.state.flights.aircraftRotation.data[
            this.currentAircraft
          ].list.map(flight => flight.ident);
        } else {
          return [];
        }
      }
    }
  },
  methods: {
    handleDrop(event) {
      event.preventDefault();
      const flightObject = JSON.parse(event.dataTransfer.getData("text"));
      if (this.currentAircraft) {
        const carrierName = this.currentAircraft;
        if (
          !this.checkIfDuplicate(flightObject) &&
          !this.checkIfOverNightFlight(flightObject)
        ) {
          this.$store.commit(ADD_FLIGHT, { carrierName, flightObject });
        }
      }
    },
    checkIfDuplicate(flightObject) {
      return this.flightIds.includes(flightObject.ident);
    },
    checkIfOverNightFlight(flightObject) {
      return flightObject.departuretime > flightObject.arrivaltime;
    },
    handleDragOver(event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    }
  }
};
