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
// Common Page Header
var react_1 = __importDefault(require("react"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function () {
    return {
        icon: { height: 'inherit', marginRight: '8px' },
    };
});
var ContentSubTitle = function (props) {
    var children = props.children, icon = props.icon, rest = __rest(props, ["children", "icon"]);
    var classes = useStyles();
    var iconNode;
    if (icon) {
        var IconClass = icon;
        iconNode = react_1.default.createElement(IconClass, { className: classes.icon });
    }
    return (react_1.default.createElement(Typography_1.default, __assign({ component: "h2", variant: "h5", gutterBottom: true, color: "inherit" }, rest),
        iconNode,
        children));
};
exports.default = react_1.default.memo(ContentSubTitle);
