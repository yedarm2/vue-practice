var vm = new Vue({
	el: '#app',
	data: {
		message: 'test'
	},
	filters: {
		toUpper(val) {
			return val.toUpperCase();
		},
		double(val) {
			return val + val;
		},
		addtion(...props) {
			return props.reduce((prev, next) => prev + next);
		}
	}
});