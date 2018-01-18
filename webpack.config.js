var path = require('path');
var webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('haha.css');
// let extractSaSS = new ExtractTextPlugin('scss/[name].scss');
module.exports = {
    entry: {
        app:path.join(__dirname, './js/webpack/index.js'),
        vendor: ['jquery']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].bundle.js'
    },

    module:{
        rules:[
            //css和sass打包处理
            {
                test:/\.(scss|sass|css)$/,
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test:/\.(jpg|png|gif|jpeg)$/,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:8192
                        }
                    }
                ]
            }
        ]
    },
    devServer:{
        // 服务器的根目录 Tell the server where to serve content from
        // https://webpack.js.org/configuration/dev-server/#devserver-contentbase
        contentBase: "./",
        // 自动打开浏览器
        open:true,
        // 端口号
        port:8888,

        // --------------- 1 热更新 -----------------
        hot: true
    },

    plugins: [
        // ---------------- 2 启用热更新插件 ----------------
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            // 模板页面路径
            template: path.join(__dirname, './webpackconfig.html'),
            // 在内存中生成页面路径，默认值为：index.html
            filename: 'index.html'
        }),
        new UglifyJSPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        }),
        extractCSS,
        // extractSaSS

    ]
};


