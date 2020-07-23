import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  progress: {
    margin: `0 ${theme.gutterSize * 2}px`,
  },
}));

const PageLoadingProgress: React.FC<{}> = () => {
  const classes = useStyles();
  return <CircularProgress className={classes.progress} size={60} color="secondary" />;
};

export default PageLoadingProgress;
