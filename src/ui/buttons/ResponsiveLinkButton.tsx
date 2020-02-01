/* Default Styles For Thin Wide Call To Action Button */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';

// Style Overrides for the button
const useStyles = makeStyles(() => ({
  button: { width: '100%', lineHeight: '3.0rem' },
}));

// TODO: ButtonProps interface doesn't define these, but why? Seems silly to have to extend...
interface ResponsiveLinkButtonProps extends ButtonProps {
  component?: React.ElementType;
  target?: string;
  rel?: string;
}

const ResponsiveLinkButton: React.FunctionComponent<ResponsiveLinkButtonProps> = props => {
  let classes = useStyles();
  let { children, ...rest } = props;

  // Default to contained and primary
  return (
    <Button variant="contained" color="primary" className={classes.button} {...rest}>
      {children}
    </Button>
  );
};

export default React.memo(ResponsiveLinkButton);
