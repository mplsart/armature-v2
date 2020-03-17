// Global App Menu
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    backgroundColor: theme.palette.globalHeader.dark,
    color: '#9e9e9e', // TODO: Snag from theme...
    position: 'relative',
    height: '100%',
    width: theme.globalMenuWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    flex: 'none',
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: theme.globalMenuWidth,
    padding: theme.spacing(2),
    paddingTop: 0,
  },
  modal: {
    top: `${theme.appBarHeight.compact}px !important`,
    [theme.breakpoints.up('sm')]: {
      top: `${theme.appBarHeight.default}px !important`,
    },
  },
  modalBackdrop: {
    top: theme.appBarHeight.compact,
    [theme.breakpoints.up('sm')]: {
      top: theme.appBarHeight.default,
    },
  },
}));

interface SlideMenuProps {
  menuActive: boolean;
  menuToggle: (force?: boolean) => void;
  children: React.ReactNode;
}

const SlideMenu: React.FC<SlideMenuProps> = props => {
  const classes = useStyles({});
  let { children, menuToggle, menuActive } = props;

  // TODO: Is this causing re-render?
  function wrappedMenuToggle(): void {
    menuToggle(false);
  }

  return (
    <div>
      <div>
        <Drawer
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
            BackdropProps: { className: classes.modalBackdrop },
          }}
          classes={{
            paper: classes.drawerPaper,
            modal: classes.modal,
          }}
          open={menuActive}
          onClose={wrappedMenuToggle}
        >
          <div className={classes.drawerInner}>{children}</div>
        </Drawer>
      </div>
    </div>
  );
};

export default SlideMenu;
