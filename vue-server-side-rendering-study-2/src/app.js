const Vue = require('vue');
const Vuex = require('vuex');
// let App = require('./components/app.vue');
const createRouter = require('./createRouter');
const App = require('./components/app.components');

function createApp(context) {
	const router = createRouter(),
		app = new Vue({
			render: h => h(App),
			router
		});

	return {app, router};
}

module.exports = createApp;