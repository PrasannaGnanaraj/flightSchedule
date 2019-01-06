import { REMOVE_FLIGHT } from "@/store/modules/flights/mutation-types";
export default {
  props: {
    flightDetails: { type: Object },
    width: { type: String, default: "10em" },
    enableDelete: { type: Boolean, default: false },
    disableDescription: { type: Boolean, default: false },
    enableIcons: { type: Boolean, default: false },
    flightIds: { type: Array, default: () => [] }
  },
  computed: {
    enableDrag: {
      get() {
        return !this.flightIds.includes(this.flightDetails.ident);
      }
    }
  },
  methods: {
    handleDragStart(event) {
      event.dataTransfer.setData(
        "text/plain",
        JSON.stringify(this.flightDetails)
      );
      event.dataTransfer.effectAllowed = "move";
    },
    handleFlightDelete() {
      this.$store.commit(REMOVE_FLIGHT, { flightObject: this.flightDetails });
    }
  }
};
