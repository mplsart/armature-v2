import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';

import MuiAppBar from '@material-ui/core/AppBar';
import MUiToolbar from '@material-ui/core/Toolbar';
import MUiTypography from '@material-ui/core/Typography';

import { Grid } from '../grid';
import AppBarMenuIcon from './AppBarMenuIcon';
import Link from 'next/link';

// TODO: Hide on Scroll ? https://codesandbox.io/s/4z56yl6rm4
/*
let titleComponents = (
  <Link href="/">
    <a>MPLSART.COM</a>
  </Link>
);
*/
let rightComponents = (
  <Link href="/contact">
    <a>contact</a>
  </Link>
); //'YOLO';

const useStyles = makeStyles(theme => {
  return {
    root: {
      backgroundColor: `${theme.palette.globalHeader.main}`,
      height: theme.appBarHeight.compact,
      minHeight: theme.appBarHeight.compact,
      [theme.breakpoints.up('sm')]: {
        height: theme.appBarHeight.default,
        minHeight: theme.appBarHeight.default
      }
    },
    gridContainer: {
      // When the grid isn't fluid, but is small enough, hide the gutter padding
      [theme.breakpoints.down('md')]: {
        paddingLeft: 0 // Alternately, we could be fluid at medium
      }
    },
    toolBar: {
      minHeight: theme.appBarHeight.compact,
      [theme.breakpoints.up('sm')]: {
        minHeight: theme.appBarHeight.default
      }
    },

    title: {
      fontFamily: theme.fontFamily.accent,
      flex: 1,
      fontSize: '1.75rem', // TODO: This should be the hx styles...
      lineHeight: '1.75rem',
      textAlign: 'left', // Left align on desktop

      [theme.breakpoints.down('md')]: {
        // Center on mobile
        textAlign: 'center',
        fontSize: '1.5rem', // TODO: This should be the hx styles...
        lineHeight: '1.5rem'
      },

      '& a': {
        fontWeight: 100,
        color: '#dfdfdf', // TODO: Power off palette
        '&:hover': {
          color: '#ffffff', // TODO: Power off palette
          textDecoration: 'none'
        }
      }
    }
  };
});

export default function AppBar({
  fluid,
  menuActive,
  poorlyNamedMenuToggle,
  titleComponents
}) {
  let classes = useStyles();
  function handleClick() {
    poorlyNamedMenuToggle();
  }

  return (
    <MuiAppBar className={classes.root} position="sticky">
      <Grid fluid={fluid} className={classes.gridContainer}>
        <MUiToolbar className={classes.toolBar}>
          <AppBarMenuIcon active={menuActive} handleMenuToggle={handleClick} />
          <MUiTypography type="title" color="inherit" className={classes.title}>
            {titleComponents}
          </MUiTypography>
          {rightComponents}
        </MUiToolbar>
      </Grid>
    </MuiAppBar>
  );
}

AppBar.propTypes = {
  fluid: PropTypes.bool,
  menuActive: PropTypes.bool,
  poorlyNamedMenuToggle: PropTypes.func.isRequired,
  titleComponents: PropTypes.node
};
