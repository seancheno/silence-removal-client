const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	devtool: "source-map",
	plugins: [
		new HtmlWebPackPlugin({
			template: "./public/index.html"
		}),
		new ManifestPlugin()
	],
	optimization: {
		minimizer: [new TerserPlugin()] //minify js
	}
});
