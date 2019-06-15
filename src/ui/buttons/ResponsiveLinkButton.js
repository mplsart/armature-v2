/* Default Styles For Thin Wide Call To Action Button */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// Style Overrides for the button
const useStyles = makeStyles(() => ({
  button: {
    width: '100%',
    lineHeight: '3.0rem'
  },
  input: {
    display: 'none'
  }
}));

export default function ResponsiveLinkButton(props) {
  const { children, ...rest } = props;
  let classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      {...rest}
    >
      {children}
    </Button>
  );
}

ResponsiveLinkButton.propTypes = {
  children: PropTypes.node
};
