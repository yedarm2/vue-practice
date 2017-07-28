import Vue from 'vue';
// import VuexApp from './components/vuex-app.vue';
import App from './components/App.vue';
import store from './store/store';

new Vue({
	el: '#app',
	store,
	name: 'app-start',
	render: h => <app></app>,
	components: {
		App
	}
});