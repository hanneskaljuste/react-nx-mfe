const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('../../package.json').dependencies;
const reactWebpackConfig = require('@nrwl/react/plugins/webpack');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = (config, context) => {
  const c = {
    ...config,
    mode: 'development',
    output: {
      ...config.output,
      publicPath: 'http://localhost:4202/',
    },
    optimization: {
      ...config.optimization,
      runtimeChunk: false,
    },
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'places',
        filename: 'remoteEntry.js',
        exposes: {
          './PlacesRemoteEntry': './src/app/components/PlacesRemoteEntry',
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
  return c;
};
