// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
    entry:{
        index:'./src/index.js',
        home:'./src/home.js',
        detail:'./src/detail.js',
    },
    mode:'development',
    output:{
        filename:'[name]_[hash:8].js',
        // 使用node的path模块，当前js的绝对路径+/+'文件夹或文件'
        path:path.join(__dirname,'output')
    }
}