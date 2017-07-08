Vue.component('my-component', {
	template: '<div class="class1 class2">{{prop1}}</div>',
	props: ['prop1']
});

var vm = new Vue({
	el: '#app',
	data: {
		message: 'Hello, Vue!! ',
		message2: 'and React!!',
		isActive: true,
		classObj: {
			'class1': false,
			'obj-class': true 
		},
		class1: 'Vue-olleh',
		class2: 'vue-is-perpect',
		styleObj: {
			'font-weight': 'bold',
			color: 'red'
		},
		styleWord1: {
			fontSize: '10px',
			'transition': 'all 0.1s'
		},
		styleWord2: {
			color: 'gold'
		},
		isRender: true,
		templateRendering: true,
		showshowshow: false
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