//webpack.prod.config.js
const  webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports={
    devtool:'none',
    entry:__dirname + '/app/main.js',//唯一入口文件
    output:{
        path:__dirname + '/build',//打包后的文件存放位置
        filename:"bundle-[hash].js"
    },
    devServer: {
        contentBase:"./build",//本地服务器所加载的页面所在的目录
        historyApiFallback:true,//不跳转
        inline:true,//实时刷新
        hot:true//热加载
    },
    module:{//loader定义的地方，使用前需要npm 安装
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader:"babel-loader",
                },
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({//抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象
                    fallback:"style-loader",
                    use:[{
                            loader:"css-loader",
                            options:{
                                modules:true
                            }
                         }]
                })
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template:__dirname+"/app/index.tmpl.html"//new 一个这个插件的示例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new ExtractTextPlugin("styles.css"),//抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象
        new webpack.optimize.UglifyJsPlugin(),//压缩JS代码
        new webpack.optimize.OccurrenceOrderPlugin(),//为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    ]
}