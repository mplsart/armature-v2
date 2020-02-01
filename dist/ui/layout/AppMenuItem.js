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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// A Wrapper class for menu items
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var ListItem_1 = __importDefault(require("@material-ui/core/ListItem"));
var useStyles = styles_1.makeStyles(function (theme) {
    return {
        listItem: __assign(__assign({}, theme.typography.subtitle1), { color: theme.palette.primary.main, borderBottom: "1px solid " + theme.palette.grey[800], fontSize: 18, fontWeight: 100, padding: theme.spacing(), fontFamily: theme.fontFamily.accent, '& a': {
                fontWeight: 100,
            }, '&:hover': {
                color: theme.palette.primary.dark,
                textDecoration: 'none',
            } }),
    };
});
//export default function AppMenuItem({ children, component, ...rest }) {
var AppMenuItem = function (props) {
    var children = props.children, component = props.component, rest = __rest(props, ["children", "component"]);
    var classes = useStyles();
    var Component = component;
    return (react_1.default.createElement(ListItem_1.default, { button: true, className: classes.listItem },
        react_1.default.createElement(Component, __assign({}, rest), children)));
};
exports.default = AppMenuItem;
