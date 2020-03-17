// Base Marquee Card

import React from 'react';
import MUITypography from '@material-ui/core/Typography';
import { Overline } from '../../../typography';
import classnames from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    '&:hover': {
      '& a': {
        textDecoration: 'none',
      },
      '& .image': {
        transform: 'scale(1.1)',
      },

      '& .primaryTitle': {
        color: theme.palette.primary.main,
      },
    },
  },

  imageWrapper: {
    overflow: 'hidden',
  },
  image: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: 0,
    display: 'block',
    padding: '52.42% 0 0 0', // 60 v 52.42
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#eeeeee',
    transition: '0.6s ease',

    [theme.breakpoints.only('xs')]: {
      padding: '80% 0 0 0', // Card matches mobile marquee ad size theoretically
    },

    [theme.breakpoints.only('md')]: {
      padding: '60% 0 0 0', // Card matches mobile marquee ad size theoretically
    },
  },

  imageLink: {
    display: 'block',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    color: 'transparent',
  },

  contentContainer: {
    // An anchor tag potentially
    width: '100%',
    color: 'inherit', //theme.palette.primary.main,
    textDecoration: 'inherit', //'none',

    position: 'absolute',
    bottom: 0,
    height: '100%',
  },
  contentContainerContent: {
    bottom: 0,
    width: '100%',
    [theme.breakpoints.only('xs')]: {
      // Phones in portrait
      padding: 16,
    },
    position: 'absolute',
    color: theme.palette.common.white,
    padding: '32px',
    background: 'linear-gradient(transparent, black)',
  },

  primaryTitle: {
    ...theme.typography.h1, // TODO: This was display2...
    fontFamily: theme.fontFamily.accent,
    marginTop: '0.35em',
    fontSize: theme.typography.pxToRem(30),
    lineHeight: theme.typography.pxToRem(32),
    letterSpacing: '-0.00833em',
    fontWeight: 400,
    marginBottom: 0,
    [theme.breakpoints.only('xs')]: {
      // Phones in portrait
      marginTop: '0',
      fontSize: theme.typography.pxToRem(24),
      lineHeight: theme.typography.pxToRem(26),
      fontWeight: 400,
      marginBottom: 0,
      color: '#fafafa',
    },
    [theme.breakpoints.only('sm')]: {
      // Ipad in portrait and phones in landscape
      fontSize: theme.typography.pxToRem(28),
      lineHeight: theme.typography.pxToRem(30),
      marginTop: 0,
      fontWeight: 400,
      marginBottom: 0,
      color: '#fafafa',
    },
  },

  byline: {
    display: 'inline-block',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1000,
    backgroundColor: '#fafafa',
    fontWeight: 100,
    fontSize: theme.typography.pxToRem(14),
    padding: '8px 16px 8px 8px',

    [theme.breakpoints.only('xs')]: {
      // Phones in portrait
      fontSize: theme.typography.pxToRem(12),
      padding: '4px 8px 4px 0px',
    },
  },

  byLineIcon: {
    fontSize: 'inherit',
    marginLeft: '2px',
    marginRight: '8px',
    height: 'inherit',
  },

  overline: {
    paddingTop: 8,
    fontWeight: 100,
    color: theme.palette.common.white,
    fontSize: theme.typography.pxToRem(12),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(10),
      paddingBottom: 4,
    },
  },
}));

// TODO: Move to a centralized types
export interface Resource {
  resource_id: string;
  _meta: {
    is_verbose: boolean;
    resource_type: string; // TODO: Enum? BlogPost, User, FileContainer
  };
}
export interface ImageVersion {
  url: string;
  height: number;
  width: number;
}

export interface ImageResource extends Resource {
  versions: {
    CARD_SMALL: ImageVersion;
    THUMB: ImageVersion;
    CARD_LARGE?: ImageVersion;

    // Not in use?
    FULL?: ImageVersion | string;
    SIZED?: ImageVersion | string;
    CARD_PROGRESSIVE?: ImageVersion | string;
  };
}

export interface StandardCardBaseProps {
  byLineIcon: React.ElementType;
  byLineText: string;
  title: string;
  overlineText: string;
  imageResource?: ImageResource | '';
  linkClassProps: object;
  linkClass: React.ElementType;
}

const StandardCardBase: React.FC<StandardCardBaseProps> = props => {
  let { byLineText, title, overlineText, linkClassProps, imageResource } = props;
  let classes = useStyles();
  let LinkClass = props.linkClass;
  let ByLineIcon = props.byLineIcon;

  // TODO: This allows default card image...
  let image_url = '';

  if (imageResource && imageResource.versions) {
    if (imageResource.versions.CARD_LARGE) {
      image_url = imageResource.versions.CARD_LARGE.url;
    } else if (imageResource.versions.CARD_SMALL) {
      image_url = imageResource.versions.CARD_SMALL.url;
    }
  } //  else ??

  let imageAttrs = { style: {} };
  if (image_url) {
    imageAttrs.style = { backgroundImage: 'url(' + image_url + ')' };
  }

  return (
    <div className={classes.root}>
      <div className={classes.byline}>
        <ByLineIcon className={classes.byLineIcon} />
        {byLineText}
      </div>

      <div className={classes.imageWrapper}>
        <div className={classnames('image', classes.image)} {...imageAttrs}>
          <LinkClass title={title} {...linkClassProps} className={classes.imageLink}>
            {title}
          </LinkClass>
        </div>
      </div>

      <LinkClass title={title} {...linkClassProps} className={classes.contentContainer}>
        <div className={classes.contentContainerContent}>
          <Overline className={classes.overline}>{overlineText}</Overline>
          <MUITypography className={classnames('primaryTitle', classes.primaryTitle)}>{title}</MUITypography>
        </div>
      </LinkClass>
    </div>
  );
};

export default StandardCardBase;
