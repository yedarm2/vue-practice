<template>
	<div>
		This is sub page.
		<transition>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition>
	</div>
</template>

<script>
export default {
	watch: {
		'$route'(to, from) {
			console.log(`move ${from.path} -> ${to.path}`);
		}
	}
}
</script>

<style lang="less">

</style>