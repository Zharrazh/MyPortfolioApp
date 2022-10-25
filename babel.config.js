module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@navigation': './app/navigation',
          '@components': './app/components',
          '@assets': './app/assets',
          '@hooks': './app/hooks',
          '@providers': './app/providers',
          '@utils': './app/utils',
          '@screens': './app/screens',
        },
      },
    ],
  ],
};
