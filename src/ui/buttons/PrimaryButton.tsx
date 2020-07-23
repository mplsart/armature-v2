/* Default Styles For Default Primary Button */
import React from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';

// TODO: ButtonProps interface doesn't define these, but why? Seems silly to have to extend...
interface PrimaryButtonProps extends ButtonProps {
  component?: React.ElementType;
  target?: string;
  rel?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return <Button variant="contained" color="primary" {...props} />;
};

export default React.memo(PrimaryButton);
