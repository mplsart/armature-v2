// Common Page Header
import React, { ElementType, ReactNode } from 'react';
import MUITypography, { TypographyProps } from '@material-ui/core/Typography';

// TODO: TypographyProps interface doesn't define these, but why? Seems silly to have to extend...
interface ContentTitleProps extends TypographyProps {
  component?: ElementType;
  children: ReactNode;
  rel?: string;
}

const ContentTitle: React.FC<ContentTitleProps> = (props) => {
  let { className, ...rest } = props;

  return <MUITypography component="h1" variant="h4" gutterBottom color="inherit" {...rest} className={className} />;
};

export default React.memo(ContentTitle);
