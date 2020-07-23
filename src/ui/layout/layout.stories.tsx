import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Grid, Row, Col } from '../grid';
import Separator from './Separator';
import Footer from './Footer';
import PaddedBox from './PaddedBox';
import SideBarContainer from './SideBarContainer';
import PageBase from '../PageBase';
import AppBar from './AppBar';
import AppMenu from './AppMenu';
import AppMenuItem from './AppMenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: theme.palette.grey[300],
  },
  styledCell: {
    backgroundColor: theme.palette.grey[500],
  },
}));

storiesOf('Layout', module)
  .add('Grid Components', () => {
    const classes = useStyles({}); // See: https://github.com/mui-org/material-ui/issues/16867

    return (
      <>
        <Grid fluid align="left">
          <Row>
            <Col xs={6}>
              <Paper className={classes.paper}>Row 1: Cell 1</Paper>
            </Col>

            <Col xs={6} className={classes.styledCell}>
              <PaddedBox>A Padded Box (align default - left)</PaddedBox>
            </Col>
          </Row>
          <Row>
            <Col xs={4} className={classes.styledCell}>
              <PaddedBox align="left">A Padded Box (align left)</PaddedBox>
            </Col>
            <Col xs={4} className={classes.styledCell}>
              <PaddedBox align="center">A Padded Box (align center)</PaddedBox>
            </Col>
            <Col xs={4} className={classes.styledCell}>
              <PaddedBox align="right">A Padded Box (align right)</PaddedBox>
            </Col>
          </Row>
          <Separator />
          <Row>
            <Col xs={3}>
              <SideBarContainer padTop>
                This is SideBar Content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ligula arcu.
                Vivamus ligula felis, fermentum sit amet quam eu, vulputate aliquam elit. Etiam sit amet ultrices mi.
                Proin justo tellus, malesuada quis sollicitudin sit amet, pellentesque et mi. Curabitur et tortor vel
                mauris maximus convallis. Ut mauris erat, auctor et elit eget, lacinia rhoncus ante. Mauris ultricies
                tellus sit amet rutrum tempor. Cras fermentum aliquet enim et pharetra.
              </SideBarContainer>
            </Col>
          </Row>
        </Grid>
        <Footer />
      </>
    );
  })
  .add('Layout', () => {
    function poorlyNamedMenuToggle(): void {
      console.log('Toggled');
      // TODO: Pass State... ? with knobs?
    }
    return (
      <PageBase>
        <Grid fluid>
          <AppBar fluid menuActive={false} menuToggle={poorlyNamedMenuToggle} titleComponents={'MPLSART.COM'} />
        </Grid>
      </PageBase>
    );
  })
  .add('Global Menu', () => {
    return (
      <>
        <AppMenu
          menuActive={true}
          menuToggle={(force?: boolean): void => {
            console.log('toggle called with force: ', force);
          }}
        >
          <AppMenuItem component="a">sdfsdsdf</AppMenuItem>
          <AppMenuItem component="a">sdfsdsdf</AppMenuItem>
          <div>sdfss</div>
        </AppMenu>
      </>
    );
  });
