// Common Page Header
import React, { ElementType, ReactNode } from 'react';
import MUITypography, { TypographyProps } from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'clsx';

const useStyles = makeStyles(theme => ({
  // Optimize for insta screenshot
  root: {
    //[theme.breakpoints.only('xs')]: { fontSize: '1.25rem' }
  },
}));

// TODO: TypographyProps interface doesn't define these, but why? Seems silly to have to extend...
interface ContentTitleProps extends TypographyProps {
  component?: ElementType;
  children: ReactNode;
  rel?: string;
}

const ContentTitle: React.FC<ContentTitleProps> = props => {
  const classes = useStyles();
  let { className, ...rest } = props;

  return (
    <MUITypography
      component="h1"
      variant="h4"
      gutterBottom
      color="inherit"
      {...rest}
      className={classnames(classes.root, className)}
    />
  );
};

export default React.memo(ContentTitle);
