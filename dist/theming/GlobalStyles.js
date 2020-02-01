"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function (theme) {
    return {
        '@global': {
            html: {
                'font-family': theme.fontFamily.default,
                '-webkit-font-smoothing': 'unset',
                '-moz-osx-font-smoothing': 'unset',
                'font-size': '18px',
            },
            body: {
                backgroundColor: '#ffffff',
                fontWeight: 100,
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
            small: __assign({}, theme.typography.caption),
            li: {
                paddingBottom: theme.spacing(1),
            },
        },
    };
});
function GlobalStyles() {
    useStyles();
    return null;
}
exports.default = GlobalStyles;
