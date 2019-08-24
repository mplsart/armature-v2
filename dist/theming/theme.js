"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _colors = require("./colors");

// Defines theme to use with jss and material-ui components
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
var accentFontFamily = '"Bryant", "Helvetica", "Arial", sans-serif';
var muiTheme = (0, _styles.createMuiTheme)({
  // Typography
  fontFamily: {
    "default": defaultFontFamily,
    accent: accentFontFamily
  },
  typography: {
    useNextVariants: true,
    fontFamily: defaultFontFamily,
    h4: {
      // ContentTitle
      fontFamily: accentFontFamily,
      fontWeight: 100,
      fontSize: '2.5rem'
    },
    h5: {
      // ContentSubTitle
      fontFamily: accentFontFamily,
      fontWeight: 100,
      fontSize: '2rem'
    },
    caption: {
      color: 'rgba(0, 0, 0, 0.54)'
    },
    button: {
      fontWeight: 400,
      textTransform: 'none',
      fontSize: '1.25rem',
      fontFamily: accentFontFamily,
      letterSpacing: '1px'
    }
  },
  // Color Palette
  palette: {
    primary: {
      light: _colors.blue[300],
      main: _colors.blue[500],
      dark: _colors.blue[700]
    },
    secondary: {
      light: _colors.pink[300],
      main: _colors.pink[500],
      dark: _colors.pink[700]
    },
    globalHeader: {
      light: '#333333',
      main: '#222222',
      dark: '#000000'
    }
  },
  overrides: {},
  appBarHeight: {
    // offset height of top appbar
    "default": 60,
    compact: 50
  }
});
var _default = muiTheme;
exports["default"] = _default;