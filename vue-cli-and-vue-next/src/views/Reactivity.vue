<template>
	<div class="reactivity">
		<p v-for="[key, item] in mapList" :key="key">
			{{ key }} {{ item }}
		</p>
		{{ number }}
	</div>
</template>

<script>
import { watchEffect } from 'vue';

export default {
	name: 'Reactivity',

	data() {
		const map = new Map();
		map.set('1', 'a');

		return {
			map,
			number: 1,
		};
	},

	computed: {
		mapList() {
			return this.map.entries();
		},
	},

	mounted() {
		setTimeout(() => {
			this.map.set('2', 'b');
		}, 1000);

		watchEffect(onInvalidate => {
			console.info('타이머 셋', this.number);
			const timer = setTimeout(() => {
				console.info('watch effect', this.number);
			}, 2000);

			onInvalidate(() => {
				clearTimeout(timer);
			});
		});

		const increseNumber = () => {
			setTimeout(() => {
				this.number++;
				if (this.number !== 10) {
					increseNumber();
				}
			}, 1000);
		};

		increseNumber();
	},
};
</script>
