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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Simple Footer
// TODO: Consider converting to <Col> component
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: __assign(__assign({}, theme.typography.caption), { color: '#111111', 'text-align': 'right', padding: theme.spacing(2) }),
}); });
var Footer = function () {
    var classes = useStyles();
    return (react_1.default.createElement("footer", { className: classes.root },
        react_1.default.createElement("p", null, "We love art. We love you. \u00A9 2020 MPLSART.COM ")));
};
exports.default = Footer;
