// Common Page Header
import React from 'react';
import PropTypes from 'prop-types';
import MUITypography from '@material-ui/core/Typography';

export default function ContentSubTitle({ children, ...rest }) {
  return (
    <MUITypography
      component="h2"
      variant="h5"
      gutterBottom
      color="inherit"
      {...rest}
    >
      {children}
    </MUITypography>
  );
}

ContentSubTitle.propTypes = {
  children: PropTypes.node.isRequired
};
