Vue.component('my-component', {
	template: '<div>{{prop1}}</div>',
	props: ['prop1']
});

var vm = new Vue({
	el: '#app',
	data: {
		message: 'Hello, Vue!! ',
		message2: 'and React!!'
	},
	computed: {
		reverseMessage: {
			get() {
				return this.message.split('').reverse().join('');
			},
			set(val) {
				this.message = val.split('').reverse().join('');
			}
		},
		sumMessage: {
			get() {
				return `${this.message}${this.message2}`;
			},
			set(newVal) {
				var names = newVal.split(' ');
				this.message = names[0];
				this.message2 = names[1];
			}
		}
	},
	watch: {
		message(newVal, oldVal) {
			console.log(`message가 '${oldVal}'에서 '${newVal}'로 변경되었습니다.`);
		}
	},
	filters: {
		toUpper(val) {
			return val.toUpperCase();
		},
		addtion(...props) {
			return props.reduce((prev, next) => prev + next);
		}
	}
});

// vm.$watch('message', function(newVal, oldVal) {
// 	console.log(`message가 '${oldVal}'에서 '${newVal}'로 변경되었습니다.`);
// });