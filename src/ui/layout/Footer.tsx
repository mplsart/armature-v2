// Simple Footer
// TODO: Consider converting to <Col> component
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.caption,
    color: '#111111',
    'text-align': 'right',
    padding: theme.spacing(2),
  },
}));

const Footer: React.FC<{}> = () => {
  let classes = useStyles();
  return (
    <footer className={classes.root}>
      <p>We love art. We love you. &copy; 2020 MPLSART.COM </p>
    </footer>
  );
};

export default Footer;
