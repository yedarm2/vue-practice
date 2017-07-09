Vue.component('my-component', {
	template: `<div @click="$emit('custom-event', 'event1')">
	사용자 정의 컴포넌트 입니다.
	<b>{{message}}</b>
	<div>
		<b><slot name="slot">this is slot</slot></b>
		<slot></slot>
	</div>
	</div>`,
	props: {
		messageByParent: {
			type: [String, Number],
			default: 'My love Vue'
		}
	},
	data() {
		return {
			message: this.messageByParent
		};
	}
});

Vue.component('component-test', {
	template: '<div>동적컴포넌트 테스트기 <p><slot></slot></p></div>'
});

let vm = new Vue({
	el: '#app',
	data: {
		message: 'Hello, vue',
		cName: 'my-component',
		array: ['item', 'item2']
	},
	methods: {
		method1(e) {
			console.log('emit custom-event', e);
		},
		method2({target}) {
			console.log(target);
		}
	}
});