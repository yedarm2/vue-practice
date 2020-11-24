<template>
	<div>
		Counter: {{ counter }}
		<span v-once>
			once: {{ counter }}
		</span>
		<component-a abc="asas" @click="func1" @input="func1" @abc-event-callback="func1" />
	</div>
</template>

<script>
import { computed } from 'vue';
import componentA from '../components/componentA.vue';

export default {
	name: 'start',

	components: {
		componentA,
	},

	provide() {
		return {
			counter: computed(() => this.counter),
		};
	},

	data() {
		return {
			counter: 100,
			array: [1, 2, 3, 4, 5],
		};
	},

	mounted() {
		setInterval(() => this.counter++, 1000);
	},

	methods: {
		func1() {
			console.info('func1');
		},
	},
};
</script>
