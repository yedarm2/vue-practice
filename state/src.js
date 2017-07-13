let store = {
	debug: true,
	state: {
		message: 'Hello!'
	},
	setMessageAction(newValue) {
		if (this.debug) {
			console.log('setMessageAction triggerd with', newValue);
		}
		this.state.message = newValue;
	},
	clearMessageAction() {
		if (this.debug) {
			console.log('clearMessageAction triggerd');
		}
		this.state.message = '';
	}
}

const app1 = new Vue({
	name: 'app1',
	el: '#app1',
	data: {
		privateState: {},
		sharedState: store.state
	},
	computed: {
		app1Message() {
			return `message of app1 ${this.sharedState.message}`;
		}
	}
});

const app2 = new Vue({
	name: 'app2',
	el: '#app2',
	data: {
		privateState: {},
		sharedState: store.state
	},
	computed: {
		app2Message() {
			return `message of app2 ${this.sharedState.message}`;
		}
	}
});