// Common Page Header
import React from 'react';
import PropTypes from 'prop-types';
import MUITypography from '@material-ui/core/Typography';

export default function ContentTitle({ children, ...rest }) {
  return (
    <MUITypography
      component="h1"
      variant="h4"
      gutterBottom
      color="inherit"
      {...rest}
    >
      {children}
    </MUITypography>
  );
}

ContentTitle.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
};
