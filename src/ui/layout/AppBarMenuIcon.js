import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';

import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => {
  return {
    menuButtonJazzy: {
      transition: 'background-color 0.3s',
      marginLeft: -1 * theme.spacing(2),
      marginRight: -1 * theme.spacing(2),
      padding: 15,
      borderRadius: 0,
      height: theme.appBarHeight.compact,
      width: theme.appBarHeight.compact,

      [theme.breakpoints.up('sm')]: {
        marginLeft: -1 * theme.spacing(3),
        marginRight: theme.spacing(2),
        height: theme.appBarHeight.default,
        width: theme.appBarHeight.default
      },

      '&:hover': {
        backgroundColor: theme.palette.globalHeader.light
      }
    },
    menuButtonJazzyLink: {
      '&:hover': {
        textDecoration: 'none'
      }
    },
    menuButtonJazzyPatty: {
      //Span
      display: 'block',
      position: 'relative',
      cursor: 'pointer',
      borderRadius: 1,
      height: 3,
      width: 25,
      backgroundColor: 'white',
      content: '"."',
      marginLeft: 'auto',
      marginRight: 'auto',
      transition: 'all 500ms ease-in-out',
      '&.patty1': { top: 12 },
      '&.patty3': { top: -12 },
      '&.patty2.active': { backgroundColor: 'transparent' },
      '&.patty1.active, &.patty3.active': {
        backgroundColor: theme.palette.primary.main
      },
      '&.patty1.active': { top: 4, transform: 'rotate(45deg)' },
      '&.patty3.active': { top: -2, transform: 'rotate(-45deg)' }
    }
  };
});

export default function HamburgerMenu({ active, handleMenuToggle }) {
  const classes = useStyles();

  const pattyClasses = [classes.menuButtonJazzyPatty, active && 'active'];

  active = true;
  return (
    <IconButton
      onClick={handleMenuToggle}
      className={classnames(classes.menuButtonJazzy, active && 'active')}
      color="default"
      aria-label="Menu"
    >
      <a
        className={classes.menuButtonJazzyLink}
        id="side_nav_toggle"
        title="Show Menu"
      >
        <span className={classnames(pattyClasses, 'patty1')}>&nbsp;</span>
        <span className={classnames(pattyClasses, 'patty2')}>&nbsp;</span>
        <span className={classnames(pattyClasses, 'patty3')}>&nbsp;</span>
      </a>
    </IconButton>
  );
}

HamburgerMenu.propTypes = {
  active: PropTypes.bool,
  handleMenuToggle: PropTypes.func.isRequired
};
