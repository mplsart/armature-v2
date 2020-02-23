// Overline - Note: We may be able to use MUIs Overline typography variant with global overrides...
import React, { ElementType, ReactNode } from 'react';
import MUITypography, { TypographyProps } from '@material-ui/core/Typography';
import classnames from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '0.35em',
    //paddingTop: 8,
    color: theme.palette.common.black,
    fontWeight: 100,
    fontSize: theme.typography.pxToRem(11),
    display: 'block',
    margin: 0,
  },
}));

// TODO: TypographyProps interface doesn't define these, but why? Seems silly to have to extend...
interface OverlineProps extends TypographyProps {
  component?: ElementType;
  children: ReactNode;
  rel?: string;
}

const Overline: React.FunctionComponent<OverlineProps> = props => {
  let { children, className, ...rest } = props;
  let classes = useStyles();

  return (
    <MUITypography
      component="span"
      variant="caption"
      className={classnames(classes.root, className)}
      gutterBottom
      color="inherit"
      {...rest}
    >
      {children}
    </MUITypography>
  );
};

export default React.memo(Overline);
