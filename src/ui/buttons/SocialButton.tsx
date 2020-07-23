// Social Button for Internal Social Links and Gallery Links, targetClasses
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';

import ArtsyIcon from '../../icons/Artsy';
import FacebookIcon from '../../icons/Facebook';
import InstagramIcon from '../../icons/Instagram';
import LinkedInIcon from '../../icons/LinkedIn';
import MNArtistsIcon from '../../icons/MNArtists';
import OtherLinkIcon from '../../icons/OtherLink';
import PatreonIcon from '../../icons/Patreon';
import TumblrIcon from '../../icons/Tumblr';
import TwitterIcon from '../../icons/Twitter';
import VimeoIcon from '../../icons/Vimeo';
import YouTubeIcon from '../../icons/YouTube';

import { SvgIconProps } from '@material-ui/core';

// Define allowed service types
type ServicesType =
  | 'artsy'
  | 'facebook'
  | 'instagram'
  | 'linkedin'
  | 'mnartists'
  | 'other'
  | 'patreon'
  | 'tumblr'
  | 'twitter'
  | 'vimeo'
  | 'youtube';

// Define map of service types and Renderer
export const serviceIconMap: Record<ServicesType, React.ElementType<SvgIconProps>> = {
  artsy: ArtsyIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  mnartists: MNArtistsIcon,
  other: OtherLinkIcon,
  patreon: PatreonIcon,
  tumblr: TumblrIcon,
  twitter: TwitterIcon,
  vimeo: VimeoIcon,
  youtube: YouTubeIcon,
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
const useStyles = makeStyles((theme) => ({
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
