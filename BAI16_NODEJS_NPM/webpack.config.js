const path = require('path') // lấy thằng path từ nodejs
const HtmlWebpackPlugin = require('html-webpack-plugin')

console.log('__dirname',__dirname);
console.log('path.resolve', path.resolve());
console.log(`path.resolve(__dirname, 'dist')`, path.resolve(__dirname, 'dist'));

module.exports = {
    mode: 'production', 
    entry: {
        app: path.resolve('src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist')
        // filename: 'script.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss|css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugin: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html'
        })
    ]
};

