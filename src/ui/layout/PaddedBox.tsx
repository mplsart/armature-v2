// Padded Box
import React from 'react';
import classNames from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    // [theme.breakpoints.up('sm')]: {
    //   paddingTop: theme.spacing(4),
    // },
  },
  left: { textAlign: 'left' },
  right: { textAlign: 'right' },
  center: { textAlign: 'center' },
}));

export interface PaddedBoxProps {
  children: React.ReactNode;
  align?: 'center' | 'right' | 'left';
}

const PaddedBox: React.FC<PaddedBoxProps> = props => {
  let classes = useStyles();
  let { children, align } = props;

  if (!align) {
    align = 'center';
  }

  let classnames = {
    [classes.root]: true,
    [classes[align]]: true,
  };

  return <div className={classNames(classnames)}>{children}</div>;
};

PaddedBox.defaultProps = { align: 'left' };

export default PaddedBox;
