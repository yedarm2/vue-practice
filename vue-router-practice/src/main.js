import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './route/route.js';
import App from './components/App.vue';

router.beforeEach((to, from, next) => {
	console.log(to);
	next();
});
window.router = router;
router.onReady(function(...props) {
	console.log('onready');
	console.log(this);
	console.log(props[0]);
	console.log(router.match(location));
});
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