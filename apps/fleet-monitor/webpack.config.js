const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('../../package.json').dependencies;
const reactWebpackConfig = require('@nrwl/react/plugins/webpack');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = (config, context) => {
  return {
    ...config,
    mode: 'production',
    output: {
      ...config.output,
      publicPath: 'http://localhost:4201/',
    },
    optimization: {
      ...config.optimization,
      runtimeChunk: false,
    },
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'fleet_monitor',
        filename: 'remoteEntry.js',
        exposes: {
          './FleetMonitorRemoteEntry':
            './src/app/components/FleetMonitorRemoteEntry',
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            eager: true,
            requiredVersion: deps.react,
          },
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
