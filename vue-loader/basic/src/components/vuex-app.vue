<template>
	<div @click="method">
		<p>
			count: {{count}}, count2: {{count2}}, count3: {{count3}} 
		</p>
		<b>
			{{countAlias}}
		</b>
		<p>
			{{strCount}}
		</p>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
	computed: {
		...mapState({
			count: ({count}) => count,
			countAlias: 'count',
			count2: ({store2: {count2}}) => count2
		}),
		...mapGetters({
			strCount: 'strCount',
			count3: 'count3'
		})
	},
	created() {

	},
	methods: {
		method() {
			let result = this.increment(this.count);
		},
		...mapMutations(['increment']),
		...mapActions({
			incrementAction: 'increment'
		})
	},
};
</script>

<style scoped>
* {
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
</style>
