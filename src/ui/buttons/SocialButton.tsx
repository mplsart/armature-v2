// Social Button for Internal Social Links and Gallery Links, targetClasses
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';

import ArtsyIcon from '../../icons/Artsy';
import TwitterIcon from '../../icons/Twitter';
import FacebookIcon from '../../icons/Facebook';
import InstagramIcon from '../../icons/Instagram';
import TumblrIcon from '../../icons/Tumblr';
import YouTubeIcon from '../../icons/YouTube';
import VimeoIcon from '../../icons/Vimeo';
import OtherLinkIcon from '../../icons/OtherLink';
import PatreonIcon from '../../icons/Patreon';
import MNArtistsIcon from '../../icons/MNArtists';
import { SvgIconProps } from '@material-ui/core';

// Define allowed service types
type ServicesType =
  | 'artsy'
  | 'instagram'
  | 'facebook'
  | 'twitter'
  | 'tumblr'
  | 'youtube'
  | 'vimeo'
  | 'patreon'
  | 'mnartists'
  | 'other';

// Define map of service types and Renderer
export const serviceIconMap: Record<ServicesType, React.ElementType<SvgIconProps>> = {
  artsy: ArtsyIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  tumblr: TumblrIcon,
  youtube: YouTubeIcon,
  vimeo: VimeoIcon,
  mnartists: MNArtistsIcon,
  patreon: PatreonIcon,
  other: OtherLinkIcon,
};

// Define SocialButton Prop Types
interface SocialButtonProps extends IconButtonProps {
  service: ServicesType | string;
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

const SocialButton: React.FC<SocialButtonProps> = ({ component, service, ...rest }) => {
  let classes = useStyles();

  // Default to use anchor tags
  let ButtonComponent: React.ElementType = component ? component : 'a';

  // Resolve Icon component for service
  let IconComponent = serviceIconMap.other;
  if (serviceIconMap[service as ServicesType]) {
    IconComponent = serviceIconMap[service as ServicesType];
  }

  return (
    <IconButton component={ButtonComponent} {...rest} aria-label={service} classes={{ root: classes.root }}>
      <IconComponent fontSize="inherit" />
    </IconButton>
  );
};

export default React.memo(SocialButton);
