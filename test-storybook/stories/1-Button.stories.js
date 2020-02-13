import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";



import Button from '../src/Button.js'


export default {
  title: 'Button',
  component: Button,
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: 'some documentation here',
  },
};


export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

// Knobs for React props
export const withAButton = () => (
  <button disabled={boolean("Disabled", false)}>
    {text("Label", "Hello Storybook")}
  </button>
);

withAButton.story = {
  parameters: {
    notes: 'withAButton.story here',
  }
};

// Knobs as dynamic variables.
export const asDynamicVariables = () => {
  const name = text("Name", "James");
  const age = number("Age", 35);
  const content = `I am ${name} and I'm ${age} years old.`;

  return <div>{content}</div>;
};
