// Gen 2 Ad Card

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardAdProps, getAdImageStyles } from './utils';

const useStyles = makeStyles((theme) => ({
  card: {
    position: 'relative',
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
      padding: '60% 0 0 0', // Default - overridden inline

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
    lineHeight: theme.typography.caption.fontSize,
    position: 'absolute',
    top: 0,
    color: theme.palette.common.white,
    paddingLeft: theme.gutterSize / 2,
    paddingTop: theme.gutterSize / 2,
    opacity: '0.8',
  },
}));

const CardAd: React.FC<CardAdProps> = (props) => {
  const { isMobile, resource, linkClassProps } = props;
  const classes = useStyles();
  const LinkClass = props.linkClass;

  // Determine Image to use based on device/breakpoints

  // Bail if we have an ad resource but it doesn't have images
  if (!(resource && resource.image_resource)) {
    return <></>;
  }

  let adImageStyles = getAdImageStyles(resource, isMobile);
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
