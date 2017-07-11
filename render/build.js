const {transformFile} = require('babel-core');
const fs = require('fs');

transformFile('./src.js', {
    presets: ['es2015'],
    plugins: ['transform-vue-jsx']
}, (err, {code}) => {
    if (err) {
        console.log(err);
        process.exit(1);
    } else {
        fs.writeFile('./compile.js', code, () => {});
    }
});