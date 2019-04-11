const path = require('path');

module.exports = {
    context: __dirname,entry: "./src/index.js",
    output: {
    filename: "main.js",
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '*']
    },
    module: {
        rules: [
            {
                exclude: /(node_modules)/,
            }
        ]
    },
devtool: 'eval-source-map'
};