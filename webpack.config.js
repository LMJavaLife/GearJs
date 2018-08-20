var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './es6/main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        // rules: [
        //     {
        //         test: /(\.jsx|\.js)$/,
        //         use: {
        //             loader: 'babel-loader',
        //             test: path.join(__dirname, 'es6'),
        //             query: {
        //               presets: 'es2015',
        //             },
        //         },
        //         exclude: /node_modules/
        //     },
        //     {
        //         test: /\.css$/,
        //         use: [
        //             {
        //                 loader: "style-loader"
        //             }, {
        //                 loader: "css-loader",
        //                 options: {
        //                     modules: false
        //                 }
        //             }
        //         ]
        //     }
        // ]
        loaders: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'es6'),
                query: {
                  presets: 'es2015',
                },
            },
            { test:/\.css$/,loader:'style-loader'},
            { test:/\.css$/,loader:'css-loader'}
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
    devServer:{
        port:7000,
        hot:true,
        overlay: true,
        stats: "errors-only"
    },
    watchOptions: {
      // aggregateTimeout: 300,
      poll: 1000
    }
};
