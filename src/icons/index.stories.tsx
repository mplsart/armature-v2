import { storiesOf } from '@storybook/react';
import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';

import Artsy from './Artsy';
import Facebook from './Facebook';
import Instagram from './Instagram';
import MNArtists from './MNArtists';
import OtherLink from './OtherLink';
import Patreon from './Patreon';
import Tumblr from './Tumblr';
import Twitter from './Twitter';
import Vimeo from './Vimeo';
import YouTube from './YouTube';

import Newspaper from './Newspaper';
import MapMarker from './MapMarker';
import Calendar from './Calendar';
import Eye from './Eye';

storiesOf('Icons', module)
  .add('Elsewhere', () => (
    <>
      <Artsy />
      <Facebook />
      <Twitter />
      <Instagram />
      <MNArtists />
      <OtherLink />
      <Patreon />
      <Tumblr />
      <YouTube />
      <Vimeo />
    </>
  ))
  .add('Content Types', () => (
    <>
      <h2>Font Awesome (Current)</h2>
      <Newspaper />
      <MapMarker />
      <Calendar />
      <Eye />
    </>
  ))
  .add('with SVG props', () => (
    <>
      <Artsy color="secondary" />
      <Facebook color="secondary" />
      <Facebook color="primary" />
      <Facebook fontSize="large" />
    </>
  ))
  .add('with Material Buttons', () => {
    return (
      <>
        <Fab size="small" color="primary">
          <Artsy />
        </Fab>
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
