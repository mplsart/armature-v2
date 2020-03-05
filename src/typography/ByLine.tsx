// ByLine - Optimize for Articles Page on mobile
import React, { ElementType, ReactNode } from 'react';
import MUITypography, { TypographyProps } from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  // Optimize for insta screenshot
  root: { fontWeight: 100, [theme.breakpoints.only('xs')]: { fontSize: theme.typography.pxToRem(13) } },
}));

// TODO: TypographyProps interface doesn't define these, but why? Seems silly to have to extend...
interface ByLineProps extends TypographyProps {
  component?: ElementType;
  children: ReactNode;
  rel?: string;
}

const ByLine: React.FC<ByLineProps> = props => {
  const classes = useStyles();
  return (
    <MUITypography component="p" variant="body1" gutterBottom color="inherit" {...props} className={classes.root} />
  );
};

export default React.memo(ByLine);
