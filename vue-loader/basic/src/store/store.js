import Vue from 'vue';
import Vuex from 'vuex';
import store2 from './store2';

Vue.use(Vuex);
const plugin1 = store => {
	store.subscribe((mutation, state) => {
		console.log(state, 'subscribe');
	});
};
const store = new Vuex.Store({
	state: {
		count: 0
	},
	plugins: [plugin1],
	mutations: {
		increment(state, payload) {
			if (payload) {
				state.count += payload;
			} else {
				state.count++;
			}
		}
	},
	getters: {
		strCount: ({count}, getters) => `${count}....`
	},
	actions: {
		increment ({commit, state, rootState}) {
			return new Promise((res, rej) => {
				setTimeout(() => {
					commit('increment');
					res(state.count);
				}, 1000);
			});
		}
	},
	modules: {
		store2
	}
});
export default store;