import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Grid, Row, Col } from './grid';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Separator from './layout/Separator';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: theme.palette.grey[300],
  },
  styledCell: {
    backgroundColor: theme.palette.grey[500],
  },
}));

storiesOf('Grid', module).add('Simple', () => {
  const classes = useStyles({});
  return (
    <Grid fluid align="left">
      <Row>
        <Col xs={12} sm={6} md={4} lg={2} xl={1}>
          <Paper className={classes.paper}>Row 1: Cell 1</Paper>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} xl={1}>
          <Paper className={classes.paper}>Row 1: Cell 2</Paper>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} xl={1}>
          <Paper className={classes.paper}>Row 1: Cell 3</Paper>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} xl={1}>
          <Paper className={classes.paper}>Row 1: Cell 4</Paper>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} xl={1}>
          <Paper className={classes.paper}>Row 1: Cell 5</Paper>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} xl={1}>
          <Paper className={classes.paper}>Row 1: Cell 6</Paper>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} xl={1}>
          <Paper className={classes.paper}>Row 1: Cell 7</Paper>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} xl={1}>
          <Paper className={classes.paper}>Row 1: Cell 8</Paper>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} xl={1}>
          <Paper className={classes.paper}>Row 1: Cell 9</Paper>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} xl={1}>
          <Paper className={classes.paper}>Row 1: Cell 10</Paper>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} xl={1}>
          <Paper className={classes.paper}>Row 1: Cell 11</Paper>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} xl={1}>
          <Paper className={classes.paper}>Row 1: Cell 12</Paper>
        </Col>
      </Row>
      <Row alignItems="center" justify="center" direction="row-reverse">
        <Col xs={12} sm={6} md={4} lg={2} xl={1}>
          <Paper className={classes.paper}>Row 2: Cell 1</Paper>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} xl={1}>
          <Paper className={classes.paper}>Row 2: Cell 2</Paper>
        </Col>
      </Row>
      <Separator withMargin />
      <Row alignItems="flex-end" justify="center" direction="row-reverse">
        <Col xs={12} sm={6} md={4} lg={2} xl={1}>
          <Paper className={classes.paper}>Row 2: Cell 1</Paper>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} xl={1} className={classes.styledCell}>
          <Paper className={classes.paper}>Row 2: Cell 2</Paper>
        </Col>
      </Row>
      <Separator />
      <Row alignItems="flex-end" justify="center" direction="row-reverse">
        <Col xs={12} sm={6} md={4} lg={2} xl={1}>
          <Paper className={classes.paper}>Row 2: Cell 1</Paper>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} xl={1} className={classes.styledCell}>
          <Paper className={classes.paper}>Row 2: Cell 2</Paper>
        </Col>
      </Row>
    </Grid>
  );
});
