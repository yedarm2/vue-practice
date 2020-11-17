<template>
	<div class="teleport">
		test teleport
		<teleport :to="selector">
			정말로 되나?
		</teleport>
		<teleport :to="selector">
			오오 되네...
		</teleport>
	</div>
</template>

<script>
export default {
	name: 'Teleport',

	data() {
		return {
			selector: 'body',
		};
	},

	mounted() {
		setTimeout(() => {
			this.selector = '#teleport1';
		}, 1000);

		setTimeout(() => {
			this.selector = '#teleport2';
		}, 2000);
	},
};
</script>
