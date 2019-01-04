
import tableComponent from '@/components/table/table.vue'
import { mapGetters, mapActions } from 'vuex';
import editModal from '@/components/editFlightDetails/editFlightDetails.vue'

export default {
  data() {
    return {
      msg:'hey',
      selectedFlight:null,
      showEditModal:false
    };
  },
  computed:{
...mapGetters({flightList:'getFlightList',flightListProperties:'getFlightListProperties'})
  },
  components:{
    tableComponent,
    editModal
  },
  methods: {
      ...mapActions(['fetchFlights']),
      handleEditRequest(uniqueId){
          this.selectedFlight = this.flightList.find((flight)=>flight.ident===uniqueId)
          this.showEditModal = true;
      }
  },
  mounted() {
      this.fetchFlights();
  }
};
