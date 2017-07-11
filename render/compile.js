'use strict';

Vue.component('anchor-header', {
	render: function render(h) {
		var tagName = 'h' + this.level;
		return h(
			'tagName',
			null,
			[h(
				'slot',
				null,
				[]
			)]
		);
	},

	props: {
		level: {
			type: Number,
			required: true
		}
	}
});

var vm = new Vue({
	el: '#app',
	data: {
		level: 1
	}
});