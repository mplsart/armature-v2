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
/* Default Styles For Thin Wide Call To Action Button */
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var Button_1 = __importDefault(require("@material-ui/core/Button"));
// Style Overrides for the button
var useStyles = styles_1.makeStyles(function () { return ({
    button: { width: '100%', lineHeight: '3.0rem' },
}); });
var ResponsiveLinkButton = function (props) {
    var classes = useStyles();
    var children = props.children, rest = __rest(props, ["children"]);
    // Default to contained and primary
    return (react_1.default.createElement(Button_1.default, __assign({ variant: "contained", color: "primary", className: classes.button }, rest), children));
};
exports.default = react_1.default.memo(ResponsiveLinkButton);
