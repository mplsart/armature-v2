// Common Page Header
import React, { ElementType, ReactNode } from 'react';
import MUITypography, { TypographyProps } from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// TODO: TypographyProps interface doesn't define these, but why? Seems silly to have to extend...
interface ContentSubTitleProps extends TypographyProps {
  component?: ElementType;
  children: ReactNode;
  rel?: string;
  icon?: React.ElementType;
}

const useStyles = makeStyles(() => {
  return {
    icon: { height: 'inherit', marginRight: '8px' },
  };
});

const ContentSubTitle: React.FC<ContentSubTitleProps> = props => {
  let { children, icon, ...rest } = props;
  let classes = useStyles();

  let iconNode;
  if (icon) {
    let IconClass = icon;
    iconNode = <IconClass className={classes.icon} />;
  }

  return (
    <MUITypography component="h2" variant="h5" gutterBottom color="inherit" {...rest}>
      {iconNode}
      {children}
    </MUITypography>
  );
};

export default React.memo(ContentSubTitle);
