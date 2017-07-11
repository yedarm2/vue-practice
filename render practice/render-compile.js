'use strict';

var getChildrenTextContent = function getChildrenTextContent(children) {
	return children.map(function (node) {
		return node.children ? getChildrenTextContent(node.children) : node.text;
	}).join(' ');
};

Vue.component('anchor-header', {
	functional: true,
	render: function render(h, context) {
		var headingId = getChildrenTextContent(context.slots().default).toLowerCase().replace(/\W+/g, '-').replace(/(^\-|\-$)/g, '');
		var tagName = 'h' + context.props.level;

		return h(tagName, null, [h(
			'a',
			{
				attrs: { href: "#" + headingId, name: headingId }
			},
			[context.slots().default, h(
				'span',
				null,
				['. Wow!!']
			)]
		)]);
	},

	props: {
		level: {
			type: Number,
			default: 1,
			required: true
		}
	}
});

Vue.component('jsx-render', {
	render: function render(h) {
		return h(
			'h1',
			null,
			['This is ', h(
				'i',
				null,
				['jsx Component!!']
			)]
		);
	}
});

var vm = new Vue({
	el: '#app',
	data: {
		level: 1
	},
	methods: {
		method1: function method1(e) {
			console.log(e.target, e.currentTarget);
		}
	},
	directives: {
		focus: {
			inserted: function inserted(el, binding, vnode) {
				console.log(binding.value);
				if (binding.value) {
					el.value = binding.value;
				}
				el.focus();
			}
		}
	}
});