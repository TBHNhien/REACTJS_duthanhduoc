const path = require('path') // lấy thằng path từ nodejs
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

console.log('__dirname',__dirname);
console.log('path.resolve', path.resolve());
console.log(`path.resolve(__dirname, 'dist')`, path.resolve(__dirname, 'dist'));

module.exports = {
    mode: 'production', 
    entry: {
        app: path.resolve('src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'script.js'
        filename:'[name].[contenthash].js', // generate dựa trên thay đổi trong code
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss|css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html'
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist') // Đường dẫn tương đối đến với thư mục chứa index.html
        },
        port: 3000, // Port thay cho port mặc định (8080)
        open: true, // Mở trang webpack khi chạy terminal
        hot: true, // Bật tính năng reload nhanh Hot Module Replacement
        compress: false, // Bật Gzip cho các tài nguyên
        historyApiFallback: true // Set true nếu bạn dùng cho các SPA và sử dụng History API của HTML5
    }
};

