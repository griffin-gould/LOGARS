// webpack.config.js

const path = require('path');

module.exports = {
    mode: 'development', // Set the mode to 'development'
    entry: './src/main.js', // Entry point for your application
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Serve files from 'dist' directory
        },
        compress: true,               // Enable gzip compression
        port: 9000,                   // Set the port for the server
        open: true,                   // Automatically open the browser when server starts
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};
