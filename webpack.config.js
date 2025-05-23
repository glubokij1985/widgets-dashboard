const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    output: {
        uniqueName: "widgets-dashboard",
        publicPath: "auto",
    },
    optimization: {
        runtimeChunk: false
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "host",
            remotes: {
                "news-widget": "newsWidget@http://localhost:4201/remoteEntry.js",
                "currency-widget": "currencyWidget@http://localhost:4202/remoteEntry.js",
            },
            shared: {
                "@angular/core": { singleton: true, requiredVersion: "auto" },
                "@angular/common": { singleton: true, requiredVersion: "auto" },
                "@angular/router": { singleton: true, requiredVersion: "auto" },
                "@angular/common/http": { singleton: true, requiredVersion: "auto" },
                "react": { singleton: true, eager: true, requiredVersion: "^19.0.0" },
                "react-dom": { singleton: true, eager: true, requiredVersion: "^19.0.0" }
            }
        })
    ]
};
