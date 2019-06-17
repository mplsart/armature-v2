// Social Button for Internal Social Links and Gallery Links, targetClasses
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'clsx';

import TwitterIcon from '../../icons/Twitter';
import FacebookIcon from '../../icons/Facebook';
import InstagramIcon from '../../icons/Instagram';
import TumblrIcon from '../../icons/Tumblr';
import YouTubeIcon from '../../icons/YouTube';
import VimeoIcon from '../../icons/Vimeo';
import OtherLinkIcon from '../../icons/OtherLink';
import MNArtistsIcon from '../../icons/MNArtists';
import IconButton from '@material-ui/core/IconButton';

let serviceComponentMap = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  tumblr: TumblrIcon,
  youtube: YouTubeIcon,
  vimeo: VimeoIcon,
  mnartists: MNArtistsIcon,
  other: OtherLinkIcon
};

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 0,
    margin: `${theme.spacing(1)}px`,
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark
    }
  },
  label: {
    '& svg': {
      fontSize: '24px'
    }
  }
}));

export default function SocialButton({ component, service, ...rest }) {
  let classes = useStyles();

  let temp = { component: 'a' };
  if (component) {
    temp.component = component;
  }

  let IconComponent = serviceComponentMap[service];

  return (
    <IconButton
      component={temp.component}
      {...rest}
      aria-label={service}
      classes={{
        root: classes.root,
        label: classes.label
      }}
    >
      <IconComponent />
    </IconButton>
  );
}
SocialButton.propTypes = {
  service: PropTypes.string,
  component: PropTypes.func
};
