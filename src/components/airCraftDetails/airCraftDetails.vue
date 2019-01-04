<template>
    <div>
    
    </div>
</template>
<script>
import tableComponent from '@/components/table/table.vue'
import { mapGetters } from 'vuex';
export default {
    computed:{
...mapGetters({totalFlyingTime:'getTotalFlyingTime'})
  },
}
</script>