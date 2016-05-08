/** * Created with WebStorm. * User: RD-小小WEB * Date: 2016/5/7 * Time: 14:32 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var webpackConfig = {
    entry: {
        index: ['index.js'],
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[chunkhash].js',
        path: path.resolve(__dirname, 'dist/static'),
        publicPath: 'static/'
    },
    resolve: {
        root: [
            path.resolve('./src/js'),
        ]
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html'
        })
    ]
}

if(Object.keys(webpackConfig.entry).length > 1){
    webpackConfig.plugins.push(new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        minChunks: 2,
    }))
}

module.exports = webpackConfig;
