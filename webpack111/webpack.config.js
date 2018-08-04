const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:'css-loader',
                    publicPath: '../'
                })
            },{
                test:/\.(jpg|png|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options:{
                        limit: 500,
                        outputPath:'img/'
                    }
                }]
            },{
                test: /\.(html|htm)$/i,
                loader: 'html-withimg-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Output Management',
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template: './src/index.html'
        }),
        new ExtractTextPlugin('./css/main.css')
    ],
    devServer:{
        contentBase: path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        port:'8081',
        compress: true
    }
}