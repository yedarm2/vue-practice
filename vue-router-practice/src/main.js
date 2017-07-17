import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';

Vue.use(VueRouter);
import router from './route/route.js';
new Vue({
	router,
    el: '#app',
	components: {
		App
	},
	render(h) {
		return (<App></App>);
	}
});
