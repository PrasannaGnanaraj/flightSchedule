
import tableComponent from '@/components/table/table.vue'
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      msg:'hey'
    };
  },
  computed:{
...mapGetters({flightList:'getFlightList',flightListProperties:'getFlightListProperties'})
  },
  components:{
    tableComponent
  },
  methods: {
      ...mapActions(['fetchFlights'])
  },
  mounted() {
      this.fetchFlights();
  }
};
