const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('../../package.json').dependencies;
const reactWebpackConfig = require('@nrwl/react/plugins/webpack');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

// function getWebpackConfig(config) {
//   // config = reactWebpackConfig(config);

//   // Disable chunking
//   config.optimization = {
//     ...config.optimization,
//     runtimeChunk: false,
//     splitChunks: {
//       chunks(chunk) {
//         return false;
//       },
//     },
//   };
//   config.output = {
//     ...config.output,
//     publicPath: 'http://localhost:4202/',
//   };

//   // // Enable asset-manifest
//   // config.plugins.push(
//   //   new WebpackManifestPlugin({
//   //     fileName: 'asset-manifest.json',
//   //     publicPath: 'http://localhost:4202/',
//   //     generate: (seed, files, entrypoints) => {
//   //       const manifestFiles = files.reduce((manifest, file) => {
//   //         manifest[file.name] = file.path;
//   //         return manifest;
//   //       }, seed);
//   //       const entrypointFiles = entrypoints.main.filter(
//   //         (fileName) => !fileName.endsWith('.map')
//   //       );

//   //       return {
//   //         files: manifestFiles,
//   //         entrypoints: entrypointFiles,
//   //       };
//   //     },
//   //   })
//   // );
//   config.plugins.push(
//     new ModuleFederationPlugin({
//       name: 'places',
//       filename: 'remoteEntry.js',
//       exposes: {
//         './PlacesRemoteEntry': './src/app/components/PlacesRemoteEntry',
//       },
//       shared: {
//         ...deps,
//         react: {
//           singleton: true,
//           eager: true,
//           requiredVersion: deps.react,
//         },
//         'react-dom': {
//           singleton: true,
//           eager: true,
//           requiredVersion: deps['react-dom'],
//         },
//       },
//     })
//   );

//   return config;
// }

// module.exports = getWebpackConfig;

module.exports = (config, context) => {
  return {
    ...config,
    mode: 'development',
    output: {
      ...config.output,
      publicPath: 'http://localhost:4202/',
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
};
