<template>
		<ul class="vue-links">
			<li><a class="link" href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
			<li><a class="link" href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
			<li><a class="link" href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
			<li><a class="link" href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
		</ul>
</template>

<script>
export default {
	name: 'vue-links',
	created() {
		window.func1 = this.func;
	},
	methods: {
		func(props) {
			let {num1, num2} = props;
			return num1 + num2;
		}
	}
};
</script>

<style scoped>
ul{
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
	font-size: 20px;
}

a {
	color: #ffcc35;
}

.link {
	font-size: 25px;
}
</style>
