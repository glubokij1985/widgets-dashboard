const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
    name: 'host',
    exposes: {
        './Component': './src/app/app.component.ts',
        './WidgetHostComponent': './src/app/widgets/components/widget-host/widget-host.component.ts',
    },
    shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    },
    remotes: {
        'news-widget': 'news-widget@http://localhost:4201/remoteEntry.js',
    },
});
