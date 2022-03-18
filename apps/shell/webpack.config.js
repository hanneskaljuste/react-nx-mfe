const { ModuleFederationPlugin, DefinePlugin } = require('webpack').container;
const deps = require('../../package.json').dependencies;

module.exports = (config, context) => {
  return {
    ...config,
    mode: 'development',
    output: {
      ...config.output,
      publicPath: 'http://localhost:4200/',
    },
    optimization: {
      ...config.optimization,
      runtimeChunk: false,
    },
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'shell',
        remotes: {
          fleet_monitor: 'fleet_monitor@http://localhost:4201/remoteEntry.js',
          places: 'places@http://localhost:4202/remoteEntry.js',
          weather: 'weather@http://localhost:4203/remoteEntry.js',
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
