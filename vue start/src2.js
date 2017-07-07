Vue.component('my-component', {
	template: '<div></div>'
});

var vm = new Vue({
	el: '.list',
	data: {
		array: [
			{
				num: 1,
				active: true
			},{
				num: 2,
				active: false
			},{
				num: 3,
				active: true
			},{
				num: 4,
				active: false
			},{
				num: 5,
				active: true
			}
		],
		obj: {
			num1: 10,
			num2: 20,
			num3: 30
		}
	}
});

Vue.component('todo-list', {
	template: `<li>
		{{title}}
		<button @click="$emit('remove')">X</button>
	</li>`,
	props: ['title']
});

var vm2 = new Vue({
	el: '#todo',
	data: {
		newTodoText: 'Hello, Vue',
		todoList: [

		]
	},
	methods: {
		addTodoList(...props) {
			console.log(props);
			this.todoList.push(this.newTodoText);
			this.newTodoText = '';
		}
	}
});

let vm3 = new Vue({
	el: '#event',
	data: {
		count: 0
	},
	methods: {
		say(keyword, e) {
			alert(keyword);
			console.log(e);
		},
		showEventInfo(e) {
			console.log('showEventInfo', e.target);
		}
	}
});

let vm4 = new Vue({
	el: '#input',
	data: {
		message: '',
		check: true,
		checks: [],
		radio: 'radio2',
		select: [],
		'trueValue': 'thisistrue',
		'falseValue': 'thisisfalse',
		bindValue: '',
		number: 100
	}
});