import Vue from 'vue';
import Vuex from 'vuex';
import VuexComponent from './vuex-component.vue';

Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		increment(state) {
			state.count++;
		}
	}
});
store.commit('increment');
console.log(store.state.count);
new Vue({
	el: '#app',
	name: 'app-start',
	render: h => <vuex-component></vuex-component>,
	components: {
		VuexComponent
	}
});
