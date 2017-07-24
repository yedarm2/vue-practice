const express = require('express');
const path = require('path');
const app = express();
const {createBundleRenderer, createRenderer} = require('vue-server-renderer');
const template = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Vue SSR</title>
</head>
<body>
	<!--vue-ssr-outlet-->
</body>
</html>
`;
const renderer = createRenderer({
	template
});
// const bundleRenderer = createBundleRenderer(path.join(__dirname, '..', 'dist', 'vue-ssr-server-bundle.json'), {
// 	template,
// 	runInNewContext: false
// });
// let createApp = require('../dist/app.js').default;
let createApp = require('./entry-server.js');

app.get('*', (req, res) => {
	const context = {
		url: req.url
	};
	createApp(context).then((vm) => {
		renderer.renderToString(vm, (err, html) => {
			if (err) {
				console.log('만세 에러다!!!!!!!!!!!!');
				console.log(err);
				res.status(404).send('에러');
			} else {
				res.send(html);
			}
		});
	}).catch((err) => {
		console.log('promise error');
		console.log(err);
	});

	// bundleRenderer.renderToString(context, (err, html) => {
	// 	if (err) {
	// 		console.log('에러발생?!1');
	// 		console.log(err);
	// 		res.status(404).send('에러');
	// 	} else {
	// 		res.send(html);
	// 	}
	// });
});

app.listen(8080, () => {
	console.log('vue ssr 서버 실행....');
});