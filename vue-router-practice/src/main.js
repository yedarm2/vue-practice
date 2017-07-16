import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

const Foo = {
	template: `<div>Foo</div>`
};
const Bar = {
	template: `<div>bar</div>`
};

const routes = [
	{path: '/foo', component: Foo},
	{path: '/bar', component: Bar}
];

const router = new VueRouter({
	routes
});

new Vue({
	el: '#app',
	router,
	template: `
		<div id="app">
			<h1>Hello, vue-router</h1>
			<p>
				<router-link to="/foo">Go to Foo</router-link>
				<router-link to="/bar">Go to Bar</router-link>
			</p>
			<router-view></router-view>
		</div>
	`
});
