// Typography Stories

import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ContentTitle } from './index';
import { ContentSubTitle } from './index';
import { Lead } from './index';
import { Overline } from './index';
import { SideBarHeader } from './index';

storiesOf('Typography', module).add('Custom Headers', () => (
  <>
    <div>
      <ContentTitle>This is a ContentTitle</ContentTitle>
      <ContentTitle component="h2">This is a ContentTitle with an H2</ContentTitle>
    </div>

    <div>
      <Overline>Overline</Overline>
      <ContentSubTitle>This is a ContentSubTitle</ContentSubTitle>
      <ContentSubTitle component="h2">This is a ContentSubTitle with an H2</ContentSubTitle>
    </div>
    <div>
      <Lead>
        This is a lead. It is great for intro paragraphs, etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nunc et ligula arcu. Vivamus ligula felis, fermentum sit amet quam eu, vulputate aliquam elit. Etiam sit amet
        ultrices mi. Proin justo tellus, malesuada quis sollicitudin sit amet, pellentesque et mi. Curabitur et tortor
        vel mauris maximus convallis. Ut mauris erat, auctor et elit eget, lacinia rhoncus ante. Mauris ultricies tellus
        sit amet rutrum tempor. Cras fermentum aliquet enim et pharetra.
      </Lead>
    </div>
    <div>
      <SideBarHeader>SideBarHeader</SideBarHeader>
    </div>
  </>
));
