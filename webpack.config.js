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
		// new webpack.HotModuleReplacementPlugin()
	],
	// devServer: {
 //        proxy: {
 //          // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
 //          // koa 代码在 ./mock 目录中，启动命令为 npm run mock
 //          '/api': {
 //            target: 'http://localhost:3000',
 //            secure: false
 //          }
 //        },
 //        contentBase: "./public", //本地服务器所加载的页面所在的目录
 //        historyApiFallback: true, //不跳转
 //        inline: true, //实时刷新
 //        // hot: true  // 使用热加载插件 HotModuleReplacementPlugin
 //    }
    devServer: {  
         host: 'localhost',  
         port: '8080',  
         proxy: {
            '/api': {
                target: 'http://localhost:3000',
                secure: true,
                changeOrigin: true
            }
        }
    } 
}