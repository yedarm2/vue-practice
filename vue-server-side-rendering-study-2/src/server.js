const express = require('express');
const path = require('path');
const app = express();
const createBundleRenderer = require('vue-server-renderer').createBundleRenderer;
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
const renderer = createBundleRenderer(path.join(__dirname, '..', 'dist', 'vue-ssr-server-bundle.json'), {
	template,
	runInNewContext: false
});

app.get('*', (req, res) => {
	const context = {
		url: req.url
	};
	createApp(context).then((app) => {
		renderer.renderToString(app, (err, html) => {
			if (err) {
				console.log('에러발생?!');
				res.status(404).send('에러');
			} else {
				res.send(html);
			}
		})
	});
});

app.listen(8080, () => {
	console.log('vue ssr 서버 실행....');
});