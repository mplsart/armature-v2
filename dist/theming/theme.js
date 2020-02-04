"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Defines theme to use with jss and material-ui components
var styles_1 = require("@material-ui/core/styles");
var colors_1 = require("./colors");
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
var accentFontFamily = '"Bryant", "Helvetica", "Arial", sans-serif';
var muiTheme = styles_1.createMuiTheme({
    // Typography
    fontFamily: { default: defaultFontFamily, accent: accentFontFamily },
    typography: {
        //useNextVariants: true,
        fontFamily: defaultFontFamily,
        h4: {
            // ContentTitle
            fontFamily: accentFontFamily,
            fontWeight: 100,
        },
        h5: {
            // ContentSubTitle
            fontFamily: accentFontFamily,
            fontWeight: 100,
        },
        caption: { color: 'rgba(0, 0, 0, 0.54)' },
        body2: { fontWeight: 100 },
        button: {
            fontWeight: 400,
            textTransform: 'none',
            fontSize: '1.25rem',
            fontFamily: accentFontFamily,
            letterSpacing: '1px',
        },
    },
    // Color Palette
    palette: {
        primary: {
            light: colors_1.blue[300],
            main: colors_1.blue[500],
            dark: colors_1.blue[700],
        },
        secondary: {
            light: colors_1.pink[300],
            main: colors_1.pink[500],
            dark: colors_1.pink[700],
        },
        globalHeader: {
            light: '#333333',
            main: '#222222',
            dark: '#000000',
            contrastText: 'green',
        },
    },
    overrides: {},
    appBarHeight: {
        // offset height of top appbar
        default: 60,
        compact: 50,
    },
    globalMenuWidth: 300,
});
exports.default = muiTheme;
