const path = require('path');

module.exports = {
	entry: {
		bubbles: './src/bubbles/index.ts',
		racing: './src/racing/index.ts',
	},
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './doc',
		port: 9773
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		],
	},
	resolve: {
		extensions: [ '.ts', '.js', '.tsx' ],
	},
	output: {
		path: path.resolve(__dirname, 'doc'),
		filename: '[name]/index.js',
	}
};