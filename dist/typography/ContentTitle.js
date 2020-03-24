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
// Common Page Header
var react_1 = __importDefault(require("react"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    // Optimize for insta screenshot
    root: {
    //[theme.breakpoints.only('xs')]: { fontSize: '1.25rem' }
    },
}); });
var ContentTitle = function (props) {
    var classes = useStyles();
    return react_1.default.createElement(Typography_1.default, __assign({ component: "h1", variant: "h4", gutterBottom: true, color: "inherit" }, props, { className: classes.root }));
};
exports.default = react_1.default.memo(ContentTitle);
