// Lead
import React, { ElementType, ReactNode } from 'react';
import MUITypography, { TypographyProps } from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    fontWeight: 300,
  },
  paragraph: { marginBottom: theme.spacing(4) },
}));

// TODO: TypographyProps interface doesn't define these, but why? Seems silly to have to extend...
interface LeadProps extends TypographyProps {
  component?: ElementType;
  children: ReactNode;
  rel?: string;
}

const Lead: React.FC<LeadProps> = (props) => {
  let classes = useStyles();

  return (
    <MUITypography
      component="p"
      variant="body2"
      classes={{
        root: classes.root,
        paragraph: classes.paragraph,
      }}
      gutterBottom
      color="inherit"
      {...props}
    />
  );
};

export default React.memo(Lead);
