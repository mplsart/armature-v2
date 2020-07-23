import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    '@global': {
      html: {
        'font-family': theme.fontFamily.default,
        '-webkit-font-smoothing': 'unset',
        '-moz-osx-font-smoothing': 'unset',
        'font-size': '18px',
      },
      body: {
        backgroundColor: '#fafafa',
        fontWeight: 100,
        '-webkit-font-smoothing': 'unset',
        '-moz-osx-font-smoothing': 'unset',
      },
      a: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        fontWeight: 600,
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      p: {
        fontWeight: 100,
      },
      small: { ...theme.typography.caption },
      li: {
        paddingBottom: theme.spacing(1),
      },
    },
  };
});

export default function GlobalStyles(): null {
  useStyles();
  return null;
}
