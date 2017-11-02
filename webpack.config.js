var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                'es2015'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: "css-loader"
                })
            },
            {
                // To make a copy of our html file we need to use html-loader
                test: /\.html./,
                use: [
                    'html-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(), // for minifying our dist/bundle.js file
        new HtmlWebpackPlugin({ // for making a copy of our src/index.html file to dist/index.html
            filename: 'index.html',
            template: 'src/index.html'
        }), 
        new CleanWebpackPlugin([ // whenever we run it will update the the whole dist file
            'dist'
        ]),
        new ExtractTextPlugin("style.css")
    ]
}
