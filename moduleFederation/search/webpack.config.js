const htmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        publicPath: 'auto',
    },
    devServer: {
        port: 3002,
    },
    plugins: [
        new htmlWebpackPlugin(),
        new ModuleFederationPlugin({
            name: 'search',
            filename: 'remoteEntry.js',
            shared: {},
            exposes: {},
            remotes: {
                nav: 'nav@http://localhost:3000/remoteEntry.js',
                home: 'home@http://localhost:3001/remoteEntry.js',
            },
        })
    ]
}
