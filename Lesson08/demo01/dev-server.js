// 引入热更新包和webpack
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

// 定义webpack文件路径和参数
const config = require('./webpack.config.js');
const options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
}
// 一系列参数获取
webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);

// 定义新的server对象，启动热更新服务
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
    console.log('dev server listening on port 5000');
});