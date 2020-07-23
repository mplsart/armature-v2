// A Wrapper class for menu items
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => {
  return {
    listItem: {
      ...theme.typography.subtitle1,
      color: theme.palette.primary.main,
      borderBottom: `1px solid ${theme.palette.grey[800]}`,
      fontSize: 18,
      fontWeight: 100,
      padding: theme.spacing(),
      fontFamily: theme.fontFamily.accent,
      '& a': {
        fontWeight: 100,
      },
      '&:hover': {
        color: theme.palette.primary.dark,
        textDecoration: 'none',
      },
    },
  };
});

export interface AppMenuItemProps extends React.HTMLProps<HTMLAnchorElement> {
  children: React.ReactNode;
  component?: any; // JSX.Element ?
}

//export default function AppMenuItem({ children, component, ...rest }) {
const AppMenuItem: React.FC<AppMenuItemProps> = (props) => {
  let { children, component, ...rest } = props;
  let classes = useStyles();
  let Component = component;

  return (
    <ListItem button className={classes.listItem}>
      <Component {...rest}>{children}</Component>
    </ListItem>
  );
};

export default AppMenuItem;
