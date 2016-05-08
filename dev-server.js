/**
 * Created by zhou on 16/5/8.
 */
var webpack = require('webpack');
    webpackConfig = require('./webpack.config'),
    open = require('open'),
    devServer = require('webpack-dev-server');


for( var v in webpackConfig.entry){
    webpackConfig.entry[v].unshift("webpack-dev-server/client?http://localhost:8080/")
}

webpackConfig.plugins.shift(1);

webpackConfig.output.publicPath = '';
var server = new devServer(webpack(webpackConfig),{
    contentBase:'src/html',
    stats: { colors: true }
});

server.listen(8080, ()=>{
    open('http://localhost:8080');
});

