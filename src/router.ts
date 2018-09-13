import Vue from 'vue'
import Router from 'vue-router'

const routeList = [
    {path: '/', component: 'Home'},
    {path: '/pvzhdecks', component: 'PvZHDecks'},
    {path: '/links', component: 'Links'},
    {path: '/donate', component: 'Donation'},
    {path: '/support', component: 'Support'},
    {path: '*', component: 'V404'}
];

const routeMaps = routeList.map(route => {
    return {
        ...route,
        component: () => import(`@/views/${route.component}.vue`)
    }
});

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: routeMaps
});

export default router;