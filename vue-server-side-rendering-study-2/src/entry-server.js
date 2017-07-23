const express = require('express');
const createApp = require('../dist/app');
const app = express();
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
const renderer = require('vue-server-renderer').createRenderer({
	template
});

app.get('*', (req, res) => {
	const context = {
		url: req.url
	},
	{app} = createApp(context);

	renderer.renderToString(app, (err, html) => {
		if (err) {
			console.log('에러 발생!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
			console.log(err);
			console.log('에러의 원인.....................');
		} else {
			res.send('html');
		}
	});
});

app.listen(8080, () => {
	console.log('vue ssr 서버 실행....');
});