const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('../../package.json').dependencies;

module.exports = (config, context) => {
  const c = {
    ...config,
    mode: 'development',
    output: {
      ...config.output,
      publicPath: 'http://localhost:4204/',
    },
    optimization: {
      ...config.optimization,
      runtimeChunk: false,
    },
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'materialize',
        filename: 'remoteEntry.js',
        exposes: {
          './MaterializeRemoteEntry':
            './src/app/components/MaterializeRemoteEntry',
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
