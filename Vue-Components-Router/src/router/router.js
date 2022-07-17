import {createRouter, createWebHashHistory} from 'vue-router';

import Login from '../pages/about.vue';
import Home from '../pages/home.vue';

const routes = [{
    path: '/about',
    component: Login
    }, {
    path: '/home',
    component: Home
}];


const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
