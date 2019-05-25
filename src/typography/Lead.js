// Lead
import React from 'react';
import PropTypes from 'prop-types';
import MUITypography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    fontWeight: 300
  },
  paragraph: { marginBottom: theme.spacing(4) }
}));

export default function Lead({ children, ...rest }) {
  let classes = useStyles();

  return (
    <MUITypography
      component="p"
      variant="body2"
      classes={{
        root: classes.root,
        paragraph: classes.paragraph
      }}
      gutterBottom
      color="inherit"
      {...rest}
    >
      {children}
    </MUITypography>
  );
}

Lead.propTypes = {
  children: PropTypes.any.isRequired
};
