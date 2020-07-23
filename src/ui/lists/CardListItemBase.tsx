// Base List Card
import React from 'react';
import classnames from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import CardMedia from '@material-ui/core/CardMedia';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MUITypography from '@material-ui/core/Typography';

import Overline from '../../typography/Overline';
import ListActionButton from '../buttons/ListActionButton';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '12px !important',
    overflowX: 'hidden',
    '&.deemphasize': {
      filter: 'grayscale(1) opacity(25%)',
    },
  },
  image: {
    width: '80px',
    height: '80px',
    marginRight: '0px',
  },

  text: {
    padding: '0 16px',
    margin: 0,
    '& h6': {
      ...theme.typography.h2, // TODO: This was display2...
      fontFamily: theme.fontFamily.accent,
      marginTop: '0.35em',
      fontSize: theme.typography.pxToRem(16),
      lineHeight: theme.typography.pxToRem(16),
      letterSpacing: '-0.00833em',
      fontWeight: 400,
      marginBottom: 0,
    },
    '&.highlightPrimary h2': {
      color: theme.palette.primary.main,
    },
    '&.dense': {
      padding: 0,
    },

    // '& aside': {
    //   lineHeight: theme.typography.pxToRem(18),
    // },
  },
}));

export interface CardListItemBaseProps {
  imageFloat: 'left' | 'right';
  highlightPrimary: boolean;
  imageUrl?: string;
  primaryText?: string;
  imageAltText?: string;
  secondaryText?: string;
  overlineText?: string;
  underlineText?: string;
  linkClassProps: object;
  component: React.ElementType;
  divider?: boolean;
  dense?: boolean;
  actionButtonProps?: object;
  deemphasize?: boolean;
}

const CardListItemBase: React.FC<CardListItemBaseProps> = (props) => {
  let {
    imageFloat,
    highlightPrimary,
    imageUrl,
    imageAltText,
    primaryText,
    secondaryText,
    overlineText,
    underlineText,
    linkClassProps,
    actionButtonProps,
    deemphasize,
    ...rest
  } = props;
  let classes = useStyles();
  let imageNode;
  let underlineNode, overlineNode;

  // Image
  if (imageUrl) {
    imageNode = (
      <ListItemIcon>
        <CardMedia className={classnames(classes.image)} image={imageUrl} title={imageAltText} />
      </ListItemIcon>
    );
  }

  // Textual Content
  if (overlineText) {
    overlineNode = <Overline>{overlineText}</Overline>;
  }

  if (underlineText) {
    underlineNode = (
      <Overline>
        <em>{underlineText}</em>
      </Overline>
    );
  }

  // Tweak button bool to be true bool
  let primaryTextNode = (
    <span>
      {overlineNode}
      <MUITypography variant="subtitle2" component="h2">
        {primaryText}
      </MUITypography>
      {underlineNode}
    </span>
  );

  let secondaryTextNode = (
    <>
      <Overline>{secondaryText}</Overline>
      {actionButtonProps && <ListActionButton {...actionButtonProps} />}
    </>
  );

  return (
    <ListItem
      button
      className={classnames({ [classes.root]: true, deemphasize: deemphasize })}
      {...rest}
      {...linkClassProps}
    >
      {imageFloat == 'left' && imageNode}

      <ListItemText
        classes={{
          root: classnames(classes.text, rest.dense ? 'dense' : '', highlightPrimary ? 'highlightPrimary' : ''),
        }}
        primary={primaryTextNode}
        secondary={secondaryTextNode}
        disableTypography
      />

      {imageFloat == 'right' && imageNode}
    </ListItem>
  );
};

export default CardListItemBase;
