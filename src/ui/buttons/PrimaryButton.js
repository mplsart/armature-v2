import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export default function PrimaryButton({ a, b, ...props }) {
  return (
    <Button variant="contained" color="primary" {...props}>
      {a * b}
    </Button>
  );
}

PrimaryButton.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number
};
