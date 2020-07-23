// Mega Header for Homepage
import React, { ElementType, ReactNode } from 'react';
import MUITypography, { TypographyProps } from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: theme.fontFamily.accent,
    [theme.breakpoints.only('xs')]: {
      // Phones in portrait
      fontSize: theme.typography.pxToRem(36),
      lineHeight: '2.6rem',
    },
    [theme.breakpoints.only('sm')]: {
      // Ipad in portrait and phones in landscape
      fontSize: '3.5rem',
      lineHeight: '3.6rem',
    },
    [theme.breakpoints.up('md')]: {
      // Ipad in portrait and phones in landscape
      fontSize: theme.typography.pxToRem(56),
      lineHeight: '3.6rem',
      paddingTop: '8px',
    },
  },
}));

// TODO: TypographyProps interface doesn't define these, but why? Seems silly to have to extend...
interface ContentTitleProps extends TypographyProps {
  component?: ElementType;
  children: ReactNode;
  rel?: string;
}

const MegaHeader: React.FC<ContentTitleProps> = (props) => {
  const classes = useStyles();
  return <MUITypography component="h1" variant="h1" gutterBottom color="inherit" {...props} className={classes.root} />;
};

export default React.memo(MegaHeader);
