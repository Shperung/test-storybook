import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../src/Button.js'


export default {
  title: 'Button',
};


export const button = () => <Button onClick={action('clicked')}>Button</Button>;
export const buttonLarge = () => <Button size="large">Button large</Button>;
