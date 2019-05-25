// A Wrapper class for menu items
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => {
  return {
    listItem: {
      ...theme.typography.subheading,
      color: theme.palette.primary.main,
      borderBottom: `1px solid ${theme.palette.grey[800]}`,
      fontSize: 18,
      padding: theme.spacing(),
      '&:hover': {
        color: theme.palette.primary.dark,
        textDecoration: 'none'
      }
    }
  };
});

export default function AppMenuItem({ children, component, ...rest }) {
  let classes = useStyles();
  let Component = component;

  return (
    <ListItem button className={classes.listItem}>
      <Component {...rest}>{children}</Component>
    </ListItem>
  );
}

AppMenuItem.propTypes = {
  children: PropTypes.node,
  component: PropTypes.any
};
