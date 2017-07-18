import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        path: '/'
    },
    mutations: {
        'route/ROUTE_CHANGED'(state, {to, from}) {
            console.log('-------------route/ROUTE_CHANGED-------------');
            console.log(state.route);
            console.log(from);
            console.log(to);
            console.log('-------------route/ROUTE_CHANGED-------------');
        }
    }
});