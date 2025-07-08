// babel.config.js
module.exports = {
  //presets: ['module:metro-react-native-babel-preset'],
  presets: ['@react-native/babel-preset'],
  plugins: [
    ['module-resolver', {
      alias: {
        '@components': './src/components',
        '@screens': './src/screens',
        '@redux': './src/redux',
        '@services': './src/services',
        '@hooks': './src/hooks',
        '@styles': './src/styles',
        '@utils': './src/utils',
        '@config': './src/config',

      },
    }],
    ['module:react-native-dotenv', {
      moduleName: '@env',
      path: '.env',
    }],
  ],
};
