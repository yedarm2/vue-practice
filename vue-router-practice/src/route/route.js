import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/home.vue';
import Sub from '../components/sub.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/sub/:title', component: Sub}
];

const router = new VueRouter({
    routes
});

export default router;