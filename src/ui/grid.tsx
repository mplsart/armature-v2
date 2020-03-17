// Simple Grid Wrapper
// TODO: We should see how much of this is needed now with MUI 4
import React from 'react';
import MuiGrid, { GridProps as MuiGridProps } from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'clsx';

const useStyles = makeStyles(theme => {
  return {
    fluidContainer: {
      width: '100%',
      flexGrow: 1,
    },
    legacyContainer: {
      marginRight: 'auto',
      marginLeft: 'auto',
      width: '100%', // xs,sm
      flexGrow: 1,
      paddingRight: theme.gutterSize / 2,
      paddingLeft: theme.gutterSize / 2,

      [theme.breakpoints.only('xs')]: {
        width: '100%',
      },
      [theme.breakpoints.only('sm')]: {
        width: '100%',
      },
      [theme.breakpoints.only('md')]: {
        width: theme.breakpoints.width('md'),
      },
      [theme.breakpoints.only('lg')]: {
        width: theme.breakpoints.width('lg'),
      },
      [theme.breakpoints.only('xl')]: {
        // force width of lg
        width: theme.breakpoints.width('lg'),
      },
    },
    alignRight: { marginRight: 0 },
    alignLeft: { marginLeft: 0 },
    typeContainer: {},
    typeItem: {},
  };
});

interface GridProps extends MuiGridProps {
  fluid?: boolean;
  align?: 'left' | 'center' | 'right';
}

const Grid: React.FC<GridProps> = props => {
  let { align, className, children, fluid, ...rest } = props;
  let classes = useStyles();
  let collectedClasses = [className];

  if (fluid) {
    collectedClasses.push(classes.fluidContainer);
  } else {
    collectedClasses.push(classes.legacyContainer);

    if (align) {
      if (align === 'right') {
        collectedClasses.push(classes.alignRight);
      } else if (align === 'left') {
        collectedClasses.push(classes.alignLeft);
      }
    }
  }
  return (
    <div className={classnames(collectedClasses)} {...rest}>
      {children}
    </div>
  );
};

type RowProps = MuiGridProps;
const Row: React.FC<RowProps> = props => {
  let { className, children, ...rest } = props;
  //let className = props.className;

  //Note: spacing 4 equates to 16px padding around Col components
  return (
    <MuiGrid spacing={4} container={true} className={className} {...rest}>
      {children}
    </MuiGrid>
  );
};

type ColProps = MuiGridProps;

const Col: React.FC<ColProps> = props => {
  let classes = useStyles();

  let { className, children, ...rest } = props;
  return (
    <MuiGrid item={true} {...rest} className={classnames(classes.typeItem, className)}>
      {children}
    </MuiGrid>
  );
};

export { Grid, Row, Col };
