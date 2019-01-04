<template>
    <div>
        <tableComponent :rows="aircraftDetailsList" :headers="airCraftDetailsProperties" uniqueId='id'>
            
        </tableComponent>
    </div>
</template>
<script>
import tableComponent from '@/components/table/table.vue'
import { mapGetters } from 'vuex';
export default {
    computed:{
...mapGetters({aircraftDetailsList:'getaircraftDetailsList',airCraftDetailsProperties:'getaircraftDetailsListProperties'})
  },
}
</script>