import Vue from 'vue';
import VueRouter from 'vue-router';
import {sync} from 'vuex-router-sync';
import store from './store/store.js';
import router from './route/route.js';
import App from './components/App.vue';

sync(store, router);
new Vue({
	store,
	router,
	el: '#app',
	components: {
		App
	},
	render(h) {
		return (<App></App>);
	}
});