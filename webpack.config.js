const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackExcludeAssetsPlugin = require("html-webpack-exclude-assets-plugin-webpack5");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: "./js/script.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        clean: true,
        assetModuleFilename: "img/[name][ext][query]",
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Main",
            template: "./index.html",
            inject: "body",
            excludeAssets: [/script.*.js/],
        }),
        new HtmlWebpackExcludeAssetsPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash].css",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "img",
                    to: "img",
                },
            ],
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                type: "asset/resource",
                generator: {
                    filename: "img/[name][ext][query]",
                },
                include: path.resolve(__dirname, "src/img"),
            },
        ],
    },
};
