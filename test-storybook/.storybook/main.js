module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: [
   '@storybook/addon-actions',
   '@storybook/addon-links',
   '@storybook/addon-a11y/register',
   '@storybook/addon-knobs/register',
   '@storybook/addon-notes/register',
   '@storybook/addon-backgrounds/register',
   '@storybook/addon-viewport/register'
  ],
};
