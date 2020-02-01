// Common Page Header
import React, { ElementType, ReactNode } from 'react';
import MUITypography, { TypographyProps } from '@material-ui/core/Typography';

// TODO: TypographyProps interface doesn't define these, but why? Seems silly to have to extend...
interface ContentSubTitleProps extends TypographyProps {
  component?: ElementType;
  children: ReactNode;
  rel?: string;
}

const ContentSubTitle: React.FunctionComponent<ContentSubTitleProps> = props => {
  return <MUITypography component="h2" variant="h5" gutterBottom color="inherit" {...props} />;
};

export default React.memo(ContentSubTitle);
