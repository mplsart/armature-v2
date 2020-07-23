// Fancy Pink Separator
import React from 'react';
import { Row, Col } from '../grid';
import classNames from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(4) / 2,
    backgroundColor: theme.palette.secondary.main,
    margin: `${theme.spacing(4) / 2}px 0`,
    backgroundImage: 'url(https://storage.googleapis.com/cdn.mplsart.com/assets/separator.png)',
    backgroundRepeat: 'repeat-y',
    backgroundPosition: '100% 0',

    [theme.breakpoints.down('md')]: {
      margin: `${theme.spacing(4) / 4}px 0`,
    },
  },

  withMargin: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginRight: theme.spacing(2),
  },
}));

const Separator: React.FC<{ withMargin?: boolean }> = (props) => {
  let classes = useStyles();
  let targetClasses = ['fancy-separator'];

  if (props.withMargin) {
    targetClasses.push(classes.withMargin);
  }

  return (
    <Row>
      <Col xs={12}>
        <div className={classNames(classes.root, targetClasses)} />
      </Col>
    </Row>
  );
};

export default Separator;
