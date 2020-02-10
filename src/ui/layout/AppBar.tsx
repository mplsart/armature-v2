import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MuiAppBar from '@material-ui/core/AppBar';
import MUiToolbar from '@material-ui/core/Toolbar';
import MUiTypography from '@material-ui/core/Typography';

import { Grid } from '../grid';
import AppBarMenuIcon from './AppBarMenuIcon';

// TODO: Hide on Scroll ? https://codesandbox.io/s/4z56yl6rm4
/*
let titleComponents = (
  <Link href="/">
    <a>MPLSART.COM</a>
  </Link>
);
*/
let rightComponents = <></>;

const useStyles = makeStyles(theme => {
  return {
    root: {
      backgroundColor: `${theme.palette.globalHeader.main}`,
      height: theme.appBarHeight.compact,
      minHeight: theme.appBarHeight.compact,
      [theme.breakpoints.up('sm')]: {
        height: theme.appBarHeight.default,
        minHeight: theme.appBarHeight.default,
      },
    },
    gridContainer: {
      // When the grid isn't fluid, but is small enough, hide the gutter padding
      [theme.breakpoints.down('md')]: {
        paddingLeft: 0, // Alternately, we could be fluid at medium
      },
    },
    toolBar: {
      minHeight: theme.appBarHeight.compact,
      [theme.breakpoints.up('sm')]: {
        minHeight: theme.appBarHeight.default,
      },
    },

    title: {
      fontFamily: theme.fontFamily.accent,
      flex: 1,
      fontSize: '1.75rem', // TODO: This should be the hx styles...
      lineHeight: '1.75rem',
      textAlign: 'left', // Left align on desktop
      fontWeight: 100,

      [theme.breakpoints.down('md')]: {
        // Center on mobile
        textAlign: 'center',
        fontSize: '1.5rem', // TODO: This should be the hx styles...
        lineHeight: '1.5rem',
        color: '#dfdfdf', // TODO: Power off palette
      },

      '& a': {
        fontWeight: 100,
        color: '#dfdfdf', // TODO: Power off palette
        '&:hover': {
          color: '#ffffff', // TODO: Power off palette
          textDecoration: 'none',
        },
      },
    },
  };
});

interface AppBarProps {
  fluid: boolean;
  menuActive: boolean;
  menuToggle: (force?: boolean) => void; //React.MouseEventHandler;
  titleComponents: React.ReactNode;
}

const AppBar: React.FunctionComponent<AppBarProps> = props => {
  let classes = useStyles();
  let { fluid, menuActive, menuToggle, titleComponents } = props;

  return (
    <MuiAppBar className={classes.root} position="sticky">
      <Grid fluid={fluid} className={classes.gridContainer}>
        <MUiToolbar className={classes.toolBar}>
          <AppBarMenuIcon active={menuActive} handleMenuToggle={menuToggle} />
          <MUiTypography variant="subtitle1" color="inherit" className={classes.title}>
            {titleComponents}
          </MUiTypography>
          {rightComponents}
        </MUiToolbar>
      </Grid>
    </MuiAppBar>
  );
};

export default AppBar;
