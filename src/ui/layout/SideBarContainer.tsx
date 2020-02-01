// Simple Sidebar Wrapper Element
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    margin: `${theme.spacing(4)}px`,
    //margin: `${theme.spacing(4)}px 0 ${theme.spacing(4)}px 0`,
    borderTop: '1px solid #000000',
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
}

const SideBarContainer: React.FunctionComponent<SideBarContainerProps> = ({ children, padTop }) => {
  let classes = useStyles();
  return <div className={classnames({ [classes.root]: true, [classes.padTop]: padTop })}>{children}</div>;
};

export default SideBarContainer;
