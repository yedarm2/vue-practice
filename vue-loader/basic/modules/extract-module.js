const ExtractTextPlugin = require("extract-text-webpack-plugin");
class extractModule {
	constructor(options) {
		this.extractOptions = options;
		this.extractPlugin = new ExtractTextPlugin(options);
	}
	extract(props) {
		let loaders = [];
		if (process.env.NODE_ENV === 'production') {
			return this.extractPlugin.extract(props);
		} else if (typeof props === 'string') {
			return props;
		} else {
			props.fallback ? loaders.push(props.fallback) : '';
			props.loader ? loaders.push(...props.loader.split(',')) : '';
			return loaders.join('!');
		}
	}
	getPlugin() {
		return this.extractPlugin;
	}
}

module.exports = extractModule;