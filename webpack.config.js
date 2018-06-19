const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
	devtool: 'eval-source-map', 
	entry: path.resolve(__dirname, "src/index.jsx"),
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
                loaders:['babel-loader?presets[]=es2015&presets[]=react'],
                exclude: path.join(__dirname,'node_modules')
			},
			{
				test: /\.less$/, 
				exclude: /node_modules/, 
				loader: 'style-loader!css-loader!less-loader'
			},
			{
	            test: /\.css$/,
	            use: [ 'style-loader', 'css-loader' ]
	        },
	        {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                exclude: /^node_modules$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
		]
	},
	resolve: {
        extensions:['.js',".jsx"],
    },
    // postcss: [
    //     require('autoprefixer') //调用autoprefixer插件，例如 display: flex
    // ],
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: path.resolve(__dirname, "src/index.html")
		})
	]
}