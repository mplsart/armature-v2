// Simple Sidebar Wrapper Element
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing(4)}px 0 ${theme.spacing(4)}px 0`,
    borderTop: '1px solid #000000',

    [theme.breakpoints.up('md')]: {
      // This tends to align the sidebar in line with the primary content header
      marginTop: `${theme.spacing(10)}px`,
    },
  },
  padSides: {
    marginRight: `${theme.spacing(4)}px`,
    marginLeft: `${theme.spacing(4)}px`,
  },
  padTop: {
    marginTop: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(11),
    },
  },
}));

interface SideBarContainerProps {
  children: React.ReactNode;
  padTop?: boolean;
  padSides?: boolean;
}

const SideBarContainer: React.FC<SideBarContainerProps> = ({ children, padTop, padSides }) => {
  let classes = useStyles();

  return (
    <div className={classnames({ [classes.root]: true, [classes.padTop]: padTop, [classes.padSides]: padSides })}>
      {children}
    </div>
  );
};

export default SideBarContainer;
