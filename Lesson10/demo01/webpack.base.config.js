const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

// 两个mode的公共部分代码
module.exports = {
    entry: {
        index: './src/index.js'
    },
    module: {
        // 各种格式文件的打包规则
        rules: [{
                test: /.css$/,
                // 根据插件规则，执行失败loader和优先执行loader
                use: ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader']
                })  
            },
            {
                test: /.less$/,
                // 最先处理的放数组最后
                use: ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','less-loader']
                })         
            },
            {
                test: /\.(jpg|png|svg)/,
                // 最先处理的放数组最后
                loader:['file-loader']         
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 打包的文件取自于
            template: './src/index.html',
        }),
        new ExtractTextWebpackPlugin({
            // filename: '[name].css'
            filename: 'styles.css'
        }),

    ]
}