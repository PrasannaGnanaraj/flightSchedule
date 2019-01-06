import flightDetails from "@/components/flightDetails/flightDetails.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      msg: "hey"
    };
  },
  computed: {
    ...mapGetters({
      flightList: "getFlightList",
      flightListProperties: "getFlightListProperties",
      count: "getTotalFlightCount",
      pageLimit: "getFlightListLimit",
      offset: "getTotalFlightOffset",
      currentAircraft: "getCurrentAircraft"
    }),
    pagnation() {
      const totalPages = parseInt(this.count / this.pageLimit);
      return totalPages ? totalPages : 0;
    },
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
  components: {
    flightDetails
  },
  methods: {
    ...mapActions(["fetchFlights"]),
    setActive(id) {
      return id === this.offset / 25 + 1;
    },
    handlePageNoClick(page) {
      this.fetchFlights(page);
    }
  }
};
