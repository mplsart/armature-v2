// Common typography elements
import React from 'react';
import PropTypes from 'prop-types';
import MUITypography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    fontWeight: 100,
    marginTop: theme.spacing(2)
  }
}));

export default function SideBarHeader({ children, ...rest }) {
  let classes = useStyles();
  return (
    <MUITypography
      component="h2"
      variant="h5"
      className={classes.root}
      {...rest}
    >
      {children}
    </MUITypography>
  );
}

SideBarHeader.propTypes = {
  children: PropTypes.any.isRequired
};
