//use resolve to join the path
const {resolve} = require('path')

//install html-webpack-plugin to auto import js/css to html
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        //could use [name] as file name, which is the entry point like main/test
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                    
                test: /\.ts$/,
                //do not check imported node_modules 
                exclude: /node_modules/,
                //install typescript ts-loader
                use: 'ts-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                //self defined title
                title:"No.1",
                //auto import packed js/css based on template
                template:'./public/index.html',
                hash: true, // cache busting
                filename: '../dist/index.html'
            })
    ],
    mode: 'development',
    devServer: {
        port: 3000,
        //auto open browser
        open: true, 
        hot: true,
    },
    devtool: 'source-map'
};
