<template>
	<!-- <select class="componentA">
		<option value="1">aa</option>
		<option value="2">bb</option>
	</select> -->
	<div>
		<input type="text">
		<injected-component />
	</div>
</template>

<script>
import InjectedComponent from './injectedComponent.vue';

export default {
	name: 'componentA',

	components: {
		InjectedComponent,
	},

	emits: ['click'],

	mounted() {
		console.info('this.$attrs', { ...this.$attrs });
	},
};
</script>
