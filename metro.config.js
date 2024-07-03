const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://metrobundler.dev/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    resolver: {
        extraNodeModules: {
            '@Api': path.resolve(__dirname, 'src/Api'),
            '@Store': path.resolve(__dirname, 'src/Store'),
            '@Components': path.resolve(__dirname, 'src/Components'),
        },
    },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
