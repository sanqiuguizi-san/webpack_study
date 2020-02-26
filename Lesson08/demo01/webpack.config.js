const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path')
module.exports = {
    entry: {
        index: './src/index.js'
    },
    mode: 'development',
    devServer:{
        contentBase:'./dist',
        hot:true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title:'Hot Module Replacement'
        })

    ]
}
