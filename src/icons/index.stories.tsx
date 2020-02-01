import { storiesOf } from '@storybook/react';
import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';

import Facebook from './Facebook';
import Instagram from './Instagram';
import MNArtists from './MNArtists';
import OtherLink from './OtherLink';
import Tumblr from './Tumblr';
import Twitter from './Twitter';
import Vimeo from './Vimeo';
import YouTube from './YouTube';

// https://blog.logrocket.com/correctly-typed-react-components-with-typescript/

storiesOf('Icons', module)
  .add('Social Icons', () => (
    <>
      <Facebook />
      <Twitter />
      <Instagram />
      <MNArtists />
      <OtherLink />
      <Tumblr />
      <YouTube />
      <Vimeo />
    </>
  ))
  .add('with SVG props', () => (
    <>
      <Facebook color="secondary" />
      <Facebook color="primary" />
      <Facebook fontSize="large" />
    </>
  ))
  .add('with Material Buttons', () => {
    return (
      <>
        <Fab size="small" color="primary">
          <Facebook />
        </Fab>
        <Fab size="small" color="secondary">
          <Twitter fontSize="inherit" />
        </Fab>
        <br />
        <br />
        <IconButton aria-label="delete" size="small">
          <Facebook fontSize="inherit" />
        </IconButton>

        <Button aria-label="delete" variant="contained" size="small">
          <Facebook fontSize="inherit" />
        </Button>

        <Button aria-label="delete" variant="contained" size="small">
          <Facebook />
        </Button>
      </>
    );
  });
