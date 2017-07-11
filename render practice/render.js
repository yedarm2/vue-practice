let getChildrenTextContent = children => children.map(
	node => node.children ? getChildrenTextContent(node.children) : node.text
).join(' ');

Vue.component('anchor-header', {
	functional: true,
	render(h, context) {
		let headingId = getChildrenTextContent(context.slots().default).toLowerCase().replace(/\W+/g, '-').replace(/(^\-|\-$)/g, '');
		let tagName = `h${context.props.level}`;

		return h(tagName, null, [<a href={"#" + headingId} name={headingId}>
			{context.slots().default}
			<span>. Wow!!</span>
		</a>]);
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
	render(h) {
		return (<h1>
			This is <i>jsx Component!!</i>
		</h1>);
	}
});

let vm = new Vue({
	el: '#app',
	data: {
		level: 1
	},
	methods: {
		method1(e) {
			console.log(e.target, e.currentTarget);
		}
	},
	directives: {
		focus: {
			inserted(el, binding, vnode, ...props) {
				console.log(binding.value)
				if (binding.value) {
					el.value = binding.value;
				}
				el.focus();
			}
		}
	}
});