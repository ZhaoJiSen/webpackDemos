const htmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        publicPath: 'auto',
    },
    devServer: {
        port: 3001,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    plugins: [
        new htmlWebpackPlugin(),
        new ModuleFederationPlugin({
            name: 'home',
            filename: 'remoteEntry.js',
            shared: {},
            remotes: {
                // 应用 nav 中暴露的文件
                // name@ip:host/filename
                nav: "nav@http://localhost:3000/remoteEntry.js"
            },
            exposes: {
                './homeList': './src/homeList.js'
            }
        })
    ]
}
