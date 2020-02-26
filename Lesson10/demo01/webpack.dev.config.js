const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// dev和prod目录合并(安装插件webpack-merge)
const WebpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');


const dist_dir = 'dist_dev';
// 引入公共部分，只保留独有的部分
module.exports = WebpackMerge(baseConfig, {
    mode: 'development',
    output:{
        // 打包输出的路径,可指定名字
        path:path.resolve(__dirname,dist_dir)
    },
    plugins: [
        // 清空打包文件路径
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // 打包的文件取自于
            template: './src/index.html',
            title:'Dev mode'
        }),

    ]
})