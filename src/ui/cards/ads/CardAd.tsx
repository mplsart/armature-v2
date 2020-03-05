// Gen 2 Ad Card

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.gutterSize / 2,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    borderRadius: 2,
    transition: 'box-shadow .25s',
    boxShadow: theme.shadows[5],

    // Hover state
    '&:hover': {
      boxShadow: theme.shadows[12],
    },
  },

  cardImage: {
    '& a': {
      display: 'block',
      position: 'relative',

      overflow: 'hidden',
      backgroundColor: theme.palette.common.white,
      width: '100%',
      height: 0,
      padding: '60% 0 0 0',

      backgroundPosition: 'center',
      backgroundSize: 'cover',

      // The Image Itself?
      '& img': {
        position: 'absolute',
        top: 0,
        left: 0,
        margin: 'auto',
        width: '100%',
      },
    },
  },

  sponsorText: {
    ...theme.typography.caption,
    position: 'absolute',
    top: 0,
    color: theme.palette.common.white,
    paddingLeft: theme.gutterSize / 2,
    paddingTop: theme.gutterSize / 2,
    opacity: '0.8',
  },
}));

export interface AdvertResource {
  image_resource: {
    versions: {
      MOBILE: { height: number; width: number; url: string };
      DEFAULT: { height: number; width: number; url: string };
    };
  };
  advert_type_label?: string;
}

export interface CardAdProps {
  isMobile: boolean;
  resource?: AdvertResource;
  linkClassProps: object;
  linkClass: React.ElementType;
}

const CardAd: React.FC<CardAdProps> = props => {
  const { isMobile, resource, linkClassProps } = props;
  const classes = useStyles();
  const LinkClass = props.linkClass;

  // Determine Image to use based on device/breakpoints
  let imageResource, imageUrl, h, w;

  // Bail if we have an ad resource but it doesn't have images
  if (!(resource && resource.image_resource)) {
    return <></>;
  }

  // If We're on mobile and the mobile
  if (isMobile && resource.image_resource.versions.MOBILE) {
    imageResource = resource.image_resource.versions.MOBILE;
  }

  if (!imageResource) {
    imageResource = resource.image_resource.versions.DEFAULT;
  }

  h = imageResource.height;
  w = imageResource.width;
  imageUrl = imageResource.url;

  let scale_factor = Math.floor(((100 * h) / w) * 100.0) / 100.0;
  let adImageStyles = {
    paddingTop: `${scale_factor}%`,
    backgroundImage: `url("${imageUrl}")`,
  };

  let linkNode = (
    <LinkClass {...linkClassProps} style={adImageStyles}>
      &nbsp;
    </LinkClass>
  );

  return (
    <div className={classes.card}>
      <div className={classes.cardImage}>{linkNode}</div>
      <div className={classes.sponsorText}>{resource.advert_type_label || 'advertisement'}</div>
    </div>
  );
};

export default CardAd;
