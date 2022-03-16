const { ModuleFederationPlugin, DefinePlugin } = require('webpack').container;
const deps = require('../../package.json').dependencies;

module.exports = (config, context) => {
  return {
    ...config,
    mode: 'production',
    output: {
      ...config.output,
      publicPath: 'http://localhost:4200/',
    },
    optimization: {
      ...config.optimization,
      runtimeChunk: false,
    },
    // devServer: {
    //   ...config.devServer,
    //   // HACK ALERT: during async module loading, webpack will try to load the remote entry from http://localhost:3000
    //   // and when it is not ready, it will start to redirect to http://localhost:5000 (local address) and throw the error,
    //   // We need to force compiler to resolve the remote script strictly from remote host http://localhost:3000.
    //   proxy: {
    //     '*/fm/*': {
    //       target: 'http://localhost:4201',
    //     },
    //     '*/pl/*': {
    //       target: 'http://localhost:4202',
    //     },
    //   },
    // },
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'shell',
        remotes: {
          fleet_monitor: 'fleet_monitor@http://localhost:4201/remoteEntry.js',
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
