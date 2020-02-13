import {setAddon} from '@storybook/react';
import LiveEdit, {setOptions} from 'storybook-addon-react-live-edit';

import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming'


import pinkPanther from  './pinkPanther';
addParameters({
  options: {
    theme: pinkPanther
  }
})

setOptions({ theme: 'darcula', presets: ['react'] });

setAddon(LiveEdit);