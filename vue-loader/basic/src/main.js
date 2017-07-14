import Vue from 'vue';
import VuexApp from './components/vuex-app.vue';
import store from './store/store';

new Vue({
	el: '#app',
	store,
	name: 'app-start',
	render: h => <vuex-app></vuex-app>,
	components: {
		VuexApp
	}
});