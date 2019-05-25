// Fancy Pink Separator
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'clsx';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(4)
    }
  }
}));

export default function PaddedBox({ children }) {
  let classes = useStyles();
  return <div className={classNames(classes.root)}>{children}</div>;
}
// prop definitions
PaddedBox.propTypes = {
  children: PropTypes.node.isRequired
};
