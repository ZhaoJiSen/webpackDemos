const htmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        publicPath: 'auto',
    },
    devServer: {
        port: 3000,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    plugins: [
        new htmlWebpackPlugin(),
        new ModuleFederationPlugin({
            name: 'nav',

            // 相对于引用该模块时候的 filename
            filename: 'remoteEntry.js',

            // 引用其他引用暴露的组件
            remotes: {},

            // 共享的三方模块
            shared: {},

            // 要暴露出去的
            exposes: {
                // key 值作为被使用时的路径
                './navHeader': './src/nav.js'
            }
        }),
    ]
}
