var path = require('path')
var webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const vueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = {
  entry: './src/entry-server.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
		filename: 'app.js',
		libraryTarget: 'commonjs2'
	},
	target: 'node',
	externals: {
		whitelist: /\.css$/
	},
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
	devtool: '#eval-source-map',
	plugins: [
		new vueSSRServerPlugin()
	]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
