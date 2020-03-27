const {resolve} = require('path')
module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-notes/register',
    'storybook-dark-mode/register'
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
      include: resolve(__dirname, '../'),
    });
    return config;
  },
};
