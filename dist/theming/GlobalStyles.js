"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GlobalStyles;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    '@global': {
      html: {
        'font-family': theme.fontFamily["default"],
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

function GlobalStyles() {
  useStyles();
  return null;
}