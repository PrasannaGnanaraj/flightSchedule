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
    })
  },
  methods: {
    handleDrop(event) {
      event.preventDefault();
      const flightObject = JSON.parse(event.dataTransfer.getData("text"));
      if (this.currentAircraft) {
        const carrierName = this.currentAircraft;
        this.$store.commit(ADD_FLIGHT, { carrierName, flightObject });
      }
    },
    handleDragOver(event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    }
  }
};
