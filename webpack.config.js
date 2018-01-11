const  webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    devtool:'eval-source-map',
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
                use:[
                    {
                        loader: "style-loader"
                    },{
                        loader:"css-loader",
                        options:{
                            modules:true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template:__dirname+"/app/index.tmpl.html"//new 一个这个插件的示例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin()//热加载插件,如果配合react使用，需要安装babel-plugin-react-transform react-transform-hmr配合babel,详细配置见.babelrc
    ]
}