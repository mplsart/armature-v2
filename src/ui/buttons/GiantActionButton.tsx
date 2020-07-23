/* Giant Call To Action Button */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';

// Style Overrides for the button
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    fontSize: '1.8rem',
    height: '4.5rem',
    lineHeight: '4.5rem',
    padding: '0 2.5rem',
    fontWeight: 'bold',
  },
}));

// TODO: ButtonProps interface doesn't define these, but why? Seems silly to have to extend...
interface GiantActionButtonProps extends ButtonProps {
  component?: React.ElementType;
  target?: string;
  rel?: string;
}

const GiantActionButton: React.FC<GiantActionButtonProps> = (props) => {
  let classes = useStyles();
  let { children, ...rest } = props;

  // Default to contained and primary
  return (
    <Button variant="contained" color="primary" className={classes.button} {...rest}>
      {children}
    </Button>
  );
};

export default React.memo(GiantActionButton);
