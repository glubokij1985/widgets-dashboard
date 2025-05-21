const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
    name: 'host',
    exposes: {
        './Component': './src/app/app.component.ts',
        './WidgetHostComponent': './src/app/widgets/components/widget-host/widget-host.component.ts',
    },
    remotes: {
        'news-widget': 'news-widget@http://localhost:4201/remoteEntry.js',
        'currency-widget': 'currencyWidget@http://localhost:4202/remoteEntry.js',
    },
    shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
        react: {
            singleton: true,
            eager: true,
            requiredVersion: '^18.0.0',
        },
        'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: '^18.0.0',
        },
    },
});
