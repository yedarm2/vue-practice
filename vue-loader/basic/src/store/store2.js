import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store2 = {
	state: {
		count2: 0
	},
	getters: {
		count3({count2}) {
			return count2 + 1;
		}
	},
	mutations: {
		increment2(state) {
			state.count2++;
		}
	},
	actions: {
		increment2({state, commit, rootState}) {
			commit('increment2');
		}
	}
};
export default store2;