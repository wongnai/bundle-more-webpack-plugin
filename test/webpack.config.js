const path = require('path')
const { BundleMoreWebpackPlugin } = require('../build')

module.exports = {
	entry: path.resolve(__dirname, 'index.js'),
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'build'),
	},
	plugins: [
		new BundleMoreWebpackPlugin(
			[
				path.resolve(__dirname, 'externals', 'script1.js'),
				path.resolve(__dirname, 'externals', 'script2.js'),
			],
			'main',
		),
	],
	target: 'node',
	mode: 'development',
	devtool: false,
	resolve: {
		modules: [path.resolve(__dirname, 'externals')],
	},
}
