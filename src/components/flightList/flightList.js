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
      offset: "getTotalFlightOffset"
    }),
    pagnation() {
      const totalPages = parseInt(this.count / this.pageLimit);
      return totalPages ? totalPages : 0;
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
