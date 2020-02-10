import { storiesOf } from '@storybook/react';
import * as React from 'react';

import NoticeBanner from './NoticeBanner';

storiesOf('Alerts', module).add('Archive Alert Banner', () => (
  <>
    <NoticeBanner>Minimal Props</NoticeBanner>
  </>
));
