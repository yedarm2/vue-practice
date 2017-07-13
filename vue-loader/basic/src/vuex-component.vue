<template>
	<div @click="$store.commit('increment')">
		{{counter}}
	</div>
</template>

<script>
export default {
	computed: {
		counter() {
			return this.$store.state.count;
		}
	}
}
</script>

<style>

</style>
