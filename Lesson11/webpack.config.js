const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const webpack = require('webpack');
// const path = require('path')
module.exports = {
    entry: {
        index: './src/index.js'
    },
    mode: 'development',
    module:{
        rules: [
            {
              test: /\.vue$/,
              loader: 'vue-loader'
            },
            {
              test: /\.js$/,
              loader: 'babel-loader'
            },
            {
              test: /\.css$/,
              use: [
                'vue-style-loader',
                'css-loader',
              ]
            },
            {
              test: /\.less$/,
              use: [
                'vue-style-loader',
                'css-loader',
                'less-loader'
              ]
            }
          ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })

    ]
}