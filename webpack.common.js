// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
// 	.BundleAnalyzerPlugin;
const autoprefixer = require("autoprefixer");
const path = require("path");
const CODEMIRROR_PATH = path.resolve(
	__dirname,
	"./node_modules/rc-slider/assets/index.css"
);

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: "/",
    },
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{
                test: /\.(scss|css)$/,
                include: [CODEMIRROR_PATH],
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						
                    },
				]
            },
            {
                test: /\.(scss|css)$/,
                exclude: /node_modules/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							importLoaders: 2,
							modules: true,
							localIdentName: "[name]__[local]__[hash:base64:5]"
						}
                    },
                    
                    
					{
						loader: "sass-loader"
					},
					{
						loader: "postcss-loader",
						options: {
							ident: "postcss",
							plugins() {
								return [autoprefixer];
							}
						}
					}
				]
			},
			{
				test: /\.(png|jp(e*)g|gif|svg|ico)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 8000,
							name: "images/[hash]-[name].[ext]"
						}
					}
				]
			},
			{
				test: /\.wav$/,
				include: /src/,
				loader: 'file-loader'
			}
		]
    }
};
