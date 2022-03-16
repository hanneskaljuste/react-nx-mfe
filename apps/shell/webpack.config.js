const { ModuleFederationPlugin, DefinePlugin } = require('webpack').container;
const deps = require('../../package.json').dependencies;

module.exports = (config, context) => {
  return {
    ...config,
    mode: 'development',
    devServer: {
      ...config.devServer,
      // HACK ALERT: during async module loading, webpack will try to load the remote entry from http://localhost:3000
      // and when it is not ready, it will start to redirect to http://localhost:5000 (local address) and throw the error,
      // We need to force compiler to resolve the remote script strictly from remote host http://localhost:3000.
      proxy: {
        'http://localhost:4202': 'http://localhost:4202',
      },
    },
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'shell',
        remotes: {
          places: 'places@http://localhost:4202/remoteEntry.js',
        },
        shared: {
          ...deps,
          react: { singleton: true, eager: true, requiredVersion: deps.react },
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: deps['react-dom'],
          },
        },
      }),
    ],
  };
};
