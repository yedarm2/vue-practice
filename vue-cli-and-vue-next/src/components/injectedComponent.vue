<template>
	<div class="injectedComponent">
		{{ counter.value }}
	</div>
</template>

<script>
export default {
	name: 'InjectedComponent',

	inject: ['counter']
};
</script>
