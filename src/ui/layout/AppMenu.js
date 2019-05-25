import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';

// TODO: Run this off of the theme
const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    backgroundColor: theme.palette.globalHeader.dark,
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    flex: 'none'
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
    padding: theme.spacing(2),
    paddingTop: 0
  },
  modal: {
    top: theme.appBarHeight.compact,
    [theme.breakpoints.up('sm')]: {
      top: theme.appBarHeight.default
    }
  },
  modalBackdrop: {
    top: theme.appBarHeight.compact,
    [theme.breakpoints.up('sm')]: {
      top: theme.appBarHeight.default
    }
  }
}));

export default function SlideMenu({
  children,
  poorlyNamedMenuToggle,
  menuActive
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <Drawer
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
            BackdropProps: { className: classes.modalBackdrop }
          }}
          classes={{
            paper: classes.drawerPaper,
            modal: classes.modal
          }}
          open={menuActive}
          onClose={() => poorlyNamedMenuToggle(false)}
        >
          <div className={classes.drawerInner}>{children}</div>
        </Drawer>
      </div>
    </div>
  );
}

SlideMenu.propTypes = {
  menuActive: PropTypes.bool,
  poorlyNamedMenuToggle: PropTypes.func.isRequired,
  children: PropTypes.node
};
