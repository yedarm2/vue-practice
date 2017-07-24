import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/app.vue';
import createRouter from './createRouter';

export default function createApp(context) {
	const router = createRouter(),
		app = new Vue({
			render: h => h(App),
			router
		});

	return {app};
}