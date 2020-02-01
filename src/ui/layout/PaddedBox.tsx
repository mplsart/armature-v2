// Fancy Pink Separator
import React from 'react';
import classNames from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(4),
    },
  },
}));

const PaddedBox: React.FunctionComponent<{ children: React.ReactNode }> = props => {
  let classes = useStyles();
  return <div className={classNames(classes.root)}>{props.children}</div>;
};

export default PaddedBox;
