import React from 'react';
import { action } from '@storybook/addon-actions';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo); 


export default {
  title: 'Textarea',
  parameters: {
    info: { inline: true },
    backgrounds: [
      { name: 'twitter', value: '#00aced', default: true },
      { name: 'facebook', value: '#3b5998' },
    ]
  },
};

export const textarea1 = () => (
  <div>
    <textarea  onClick={action('clicked')} onChange={action('changed')}>textarea1</textarea>
    <textarea  onClick={action('clicked')} onChange={action('changed')}>textarea1.1</textarea>
  </div>);
export const textarea2 = () => <textarea name="textarea2" onClick={action('clicked')} onChange={action('changed')}>textarea2</textarea>;
