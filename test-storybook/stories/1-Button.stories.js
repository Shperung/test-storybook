import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../src/Button.js'

import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Button',
  component: Button,
  decorators: [withA11y],
};


export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
