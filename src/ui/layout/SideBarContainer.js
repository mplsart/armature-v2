// Simple Sidebar Wrapper Element
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import classnames from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    margin: `${theme.spacing(4)}px`,
    //margin: `${theme.spacing(4)}px 0 ${theme.spacing(4)}px 0`,
    borderTop: '1px solid #000000'
  },
  padTop: {
    marginTop: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(11)
    }
  }
}));

export default function SideBarContainer({ children, padTop }) {
  let classes = useStyles();

  return (
    <div
      className={classnames({ [classes.root]: true, [classes.padTop]: padTop })}
    >
      {children}
    </div>
  );
}

SideBarContainer.propTypes = {
  children: PropTypes.any.isRequired,
  padTop: PropTypes.bool
};
