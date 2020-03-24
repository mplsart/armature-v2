/* Default Styles For Thin Wide Call To Action Button */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';

// Style Overrides for the button
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.gutterSize / 4,
    marginLeft: 0,
    padding: '0 1.5rem',
    fontWeight: 'normal',
    minHeight: '26px',
    fontSize: '.75rem',
  },
  input: {
    display: 'none',
  },
}));

interface ProfileButtonProps extends ButtonProps {
  component?: React.ElementType;
  as?: any;
  target?: string;
  rel?: string;
}

const ProfileButton: React.FC<ProfileButtonProps> = props => {
  const { children, ...rest } = props;
  const classes = useStyles();

  return (
    <Button variant="contained" color="primary" className={classes.button} {...rest}>
      {children}
    </Button>
  );
};

export default ProfileButton;
