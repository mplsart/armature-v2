import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.caption,
    color: '#111111',
    'text-align': 'right',
    padding: theme.spacing(2)
  }
}));

export default function Footer() {
  let classes = useStyles();
  return (
    <footer className={classes.root}>
      <p>We love art. We love you. &copy; 2019 MPLSART.COM </p>
    </footer>
  );
}

Footer.propTypes = {};
