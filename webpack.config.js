const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src",
    output: {
        filename: "[name]-[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[name][hash].[ext]"
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
    
                    "style-loader",
    
                    "css-loader",
    
                    "sass-loader",
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader"
            },
            {
                test: /\.(png|jpe?g|gif)$/i,

                type: "asset/resource"

                
            }]

    },
    plugins: [new HtmlWebpackPlugin({filename: "index.html", template: "./src/index.html", chunks: "index" }), 
    new HtmlWebpackPlugin({filename: "index2.html", template: './src/index2.html', chunks: "index2" }),
    new HtmlWebpackPlugin({filename: "index3.html", template: './src/index3.html', chunks: "index3" }),
    new CleanWebpackPlugin()]
}