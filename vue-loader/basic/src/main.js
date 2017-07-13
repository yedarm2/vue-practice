import Vue from 'vue';
import VuexComponent from './vuex-component.vue';
import store from './store.js';

new Vue({
	el: '#app',
	store,
	name: 'app-start',
	render: h => <vuex-component></vuex-component>,
	components: {
		VuexComponent
	}
});
