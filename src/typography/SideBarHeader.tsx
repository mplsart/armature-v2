// Common typography elements
import React, { ElementType, ReactNode } from 'react';
import MUITypography, { TypographyProps } from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    fontWeight: 100,
    marginTop: theme.spacing(2),
  },
}));

// TODO: TypographyProps interface doesn't define these, but why? Seems silly to have to extend...
interface SideBarHeaderProps extends TypographyProps {
  component?: ElementType;
  children: ReactNode;
  rel?: string;
}

const SideBarHeader: React.FunctionComponent<SideBarHeaderProps> = props => {
  let classes = useStyles();
  return <MUITypography component="h2" variant="h5" className={classes.root} {...props} />;
};

export default React.memo(SideBarHeader);
