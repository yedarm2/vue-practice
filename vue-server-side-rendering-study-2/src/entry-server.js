import createApp from './app';

export default context => {
	return new Promise((res, rej) => {
		const {app, router} = createApp();
		router.push(context.url);
		router.onReady(() => {
			const matchedComponents = router.getMatchedComponents();

			if (!matchedComponents.length) {
				console.log('클라이언트가 존재하지 않는 사이트를 요청했습니다.', context.url);
				return reject({code:404});
			}
			resolve(app);
		}, rej);
	});
};