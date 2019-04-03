const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/web/index.js',
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist',
    },
    module: {
      rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
      ]
    },
	plugins: [
		new HtmlWebPackPlugin({
			hash: true,
			filename: "index.html", // target html
			template: "./src/web/public/index.html" // source html
        }),
    ],
  };