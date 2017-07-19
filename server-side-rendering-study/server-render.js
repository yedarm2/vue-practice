const Vue = require('vue');
let template = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>{{title}}</title>
</head>
<body>
	<!--vue-ssr-outlet-->
	{{{html}}}
</body>
</html>
`, template2 = `
<div id="app">
	<ul>
		<li v-for="item in array">
			item: {{item}}
		</li>
	</ul>
</div>
`;
const renderer = require('vue-server-renderer').createRenderer({
	template
});
const app = new Vue({
	template: template2,
	data: {
		array: [1,2,3,4,5]
	},
	components: {
		vueElement: {
			template: `
				<div id="vue"></div>
			`
		}
	}
});
const context = {
	title: 'ssr title',
	html: `
		<div class="classa"></div>
	`
};
renderer.renderToString(app, context, (err, html) => {
	if (err) {
		console.log('에러 발생');
		console.log(err);
		console.log('에러 발생');
	} else {
		console.log(html);
	}
});