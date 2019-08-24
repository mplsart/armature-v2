"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GlobalStyles;

var _styles = require("@material-ui/core/styles");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
        backgroundColor: '#ffffff',
        fontWeight: 100
      },
      a: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        fontWeight: 600,
        '&:hover': {
          textDecoration: 'underline'
        }
      },
      p: {
        fontWeight: 100
      },
      small: _objectSpread({}, theme.typography.caption),
      li: {
        paddingBottom: theme.spacing(1)
      }
    }
  };
});

function GlobalStyles() {
  useStyles();
  return null;
}