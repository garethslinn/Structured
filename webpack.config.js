const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: ['./client/index.js', './client/src/scss/main.scss'],
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.css$/,
                exclude: [path.resolve(__dirname, "node_modules"), path.resolve(__dirname, "/client/*/pages")],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','postcss-loader','sass-loader']
                })
            },
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ],

    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new ExtractTextPlugin({ // define where to save the file
            filename: 'dist/[name].bundle.css',
            allChunks: true,
        })
    ]
};