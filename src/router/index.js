import Vue from 'vue';
import Router from 'vue-router';
import flightList from '@/components/flightList/flightList.vue'

Vue.use(Router);

export default new Router({
    routes:[{
        path:'/',
        name:'Flight List',
        component:flightList
    }]
})