const Vue = require('vue');
const Vuex = require('vuex');
import App from './components/app.vue';

export default function createApp(context) {
	const app = new Vue({
		render: h => h(App)
	});

	return {app};
}