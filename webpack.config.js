const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	mode: 'development',
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[hash:8].js'
	},
	
	module: {
		rules: [{
				test: /(\.jsx|\.js)$/,
				use: {
					loader: "babel-loader"
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['style-loader', {
					loader: miniCssExtractPlugin.loader
				}, 'css-loader']
			},
			{
				test: /\.html$/,
				use: [{
					loader: 'html-withimg-loader'
				}]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 1,
						outputPath: 'imgs/'
					},
				}]
			},
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: false,
		port: 3000
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: 'index.html',
		}),
		new miniCssExtractPlugin({
			filename: 'css/[name].css'
		})
	]
}
