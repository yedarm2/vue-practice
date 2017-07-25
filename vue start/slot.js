let slotListenerSetter = {
	template: '#slot-listener-setter'
};

let vm = new Vue({
	template:`
		<slot-listener-setter>
			<p slot="hahaha">
				asfdfafsd
			</p>
		</slot-listener-setter>
	`,
	components: {
		slotListenerSetter
	},
	el: '#app',
	methods: {
		slotListener() {
			alert('슬롯 이벤트 연결');
		}
	}
});