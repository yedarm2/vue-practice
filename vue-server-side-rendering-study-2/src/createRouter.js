const Vue = require('vue');
const Router = require('vue-router');
Vue.use(Router);

const routes = [
	{
		path: '/',
		component: {
			name: 'app',
			template: `
<div class="vue-app">
	This is ssr app.
</div>
`
		}
	}
];
module.exports =  function createRouter() {
	return new Router({
		mode: 'history',
		routes
	});
};