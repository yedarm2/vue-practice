<template>
	<div>
		This is sub page.
		<div>
			{{$route.params.title}}
		</div>
	</div>
</template>

<script>
export default {
    watch: {
		'$route'(to, from) {
			console.log(`move ${from.params.title} -> ${to.params.title}`);
		}
	}
}
</script>

<style lang="less">

</style>