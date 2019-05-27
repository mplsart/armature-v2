import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return {
    '@global': {
      html: {
        'font-family': theme.fontFamily.default,
        '-webkit-font-smoothing': 'unset',
        '-moz-osx-font-smoothing': 'unset',
        'font-size': '18px'
      },
      body: {
        backgroundColor: '#ffffff'
      },
      a: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        fontWeight: 600,
        '&:hover': {
          textDecoration: 'underline'
        }
      }
    }
  };
});

export default function GlobalStyles() {
  useStyles();
  return null;
}
