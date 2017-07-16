<template>
	<div id="app">
		<img src="./assets/logo.png">
		<h1></h1>
		<h2>Essential Links</h2>
		<ul>
			<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
			<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
			<li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
			<li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
		</ul>
		<h2>Ecosystem</h2>
		<vue-links></vue-links>
		<p v-for="({id, text}, idx) in array" :key="idx" >
			{{id}} {{text}}
		</p>
	</div>
</template>

<script>
import VueLinks from './vue-links.vue'

export default {
	name: 'app',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App',
			array: [
				{
					id: 0,
					text: 'String'
				},
				{
					id: 1,
					text: 'String'
				}
			]
		}
	},
	components: {
		VueLinks
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

h1, h2 {
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
}

.vue-links {
	margin-top: 100px;
}
</style>
