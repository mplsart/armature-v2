// Social Button for Internal Social Links and Gallery Links, targetClasses
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';

import TwitterIcon from '../../icons/Twitter';
import FacebookIcon from '../../icons/Facebook';
import InstagramIcon from '../../icons/Instagram';
import TumblrIcon from '../../icons/Tumblr';
import YouTubeIcon from '../../icons/YouTube';
import VimeoIcon from '../../icons/Vimeo';
import OtherLinkIcon from '../../icons/OtherLink';
import MNArtistsIcon from '../../icons/MNArtists';
import { SvgIconProps } from '@material-ui/core';

// Define allowed service types
type ServicesType = 'instagram' | 'facebook' | 'twitter' | 'tumblr' | 'youtube' | 'vimeo' | 'mnartists' | 'other';

// Define map of service types and Renderer
const serviceIconMap: Record<ServicesType, React.ElementType<SvgIconProps>> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  tumblr: TumblrIcon,
  youtube: YouTubeIcon,
  vimeo: VimeoIcon,
  mnartists: MNArtistsIcon,
  other: OtherLinkIcon,
};

// Define SocialButton Prop Types
interface SocialButtonProps extends IconButtonProps {
  service: ServicesType;
  component?: React.ElementType;
  target?: string;
  rel?: string;
  href?: string;
}

// Override IconButton defaults: root is applied to Button root.
// TODO: Might be easier to override Button vs. IconButton ?
const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 0,
    margin: `${theme.spacing(1)}px`,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const SocialButton: React.FunctionComponent<SocialButtonProps> = ({ component, service, ...rest }) => {
  let classes = useStyles();

  // Default to use anchor tags
  let ButtonComponent: React.ElementType = component ? component : 'a';

  // Resolve Icon component for service
  let IconComponent = serviceIconMap[service] || serviceIconMap.other;

  return (
    <IconButton component={ButtonComponent} {...rest} aria-label={service} classes={{ root: classes.root }}>
      <IconComponent fontSize="inherit" />
    </IconButton>
  );
};

export default React.memo(SocialButton);
