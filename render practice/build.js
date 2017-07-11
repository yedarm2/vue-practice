const {transformFile} = require('babel-core');
const fs = require('fs');

transformFile('./render.js', {
	presets: ['es2015'],
	plugins: ['transform-vue-jsx']
}, (err, {code}) => {
	fs.writeFile('./render-compile.js', code, () => {})
});