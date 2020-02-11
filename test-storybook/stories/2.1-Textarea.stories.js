import React from 'react';
import { action } from '@storybook/addon-actions';


export default {
  title: 'Textarea',
};

export const textarea1 = () => (
  <div>
    <textarea onClick={action('clicked')} onChange={action('changed')}>textarea1</textarea>
    <textarea onClick={action('clicked')} onChange={action('changed')}>textarea1.1</textarea>
  </div>);
export const textarea2 = () => <textarea onClick={action('clicked')} onChange={action('changed')}>textarea2</textarea>;
