import webpack from 'webpack';

import { BuildOptions } from '../types/config';

export function buildBabelLoader({ isDev }: BuildOptions): webpack.RuleSetRule {
  return {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['urk', 'en'],
              keyAsDefaultValue: true,
            },
          ],
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  };
}
