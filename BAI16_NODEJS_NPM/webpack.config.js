const path = require('path') // lấy thằng path từ nodejs

console.log('__dirname',__dirname);
console.log('path.resolve', path.resolve());
console.log(`path.resolve(__dirname, 'dist')`, path.resolve(__dirname, 'dist'));

module.exports = {
    mode: 'development', 
    entry: {
        app: path.resolve('src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist')
        // filename: 'script.js'
    }
};

