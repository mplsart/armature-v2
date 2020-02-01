import { configure, addDecorator } from '@storybook/react';
import {muiTheme} from 'storybook-addon-material-ui';
import theme from '../src/theming/theme';

addDecorator(muiTheme([theme]))

const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);