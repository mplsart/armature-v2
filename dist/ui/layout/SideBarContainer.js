"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Simple Sidebar Wrapper Element
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var clsx_1 = __importDefault(require("clsx"));
var useStyles = styles_1.makeStyles(function (theme) {
    var _a, _b;
    return ({
        root: (_a = {
                margin: theme.spacing(4) + "px 0 " + theme.spacing(4) + "px 0",
                borderTop: '1px solid #000000'
            },
            _a[theme.breakpoints.up('md')] = {
                // This tends to align the sidebar in line with the primary content header
                marginTop: theme.spacing(10) + "px",
            },
            _a),
        padSides: {
            marginRight: theme.spacing(4) + "px",
            marginLeft: theme.spacing(4) + "px",
        },
        padTop: (_b = {
                marginTop: theme.spacing(0)
            },
            _b[theme.breakpoints.up('md')] = {
                marginTop: theme.spacing(11),
            },
            _b),
    });
});
var SideBarContainer = function (_a) {
    var _b;
    var children = _a.children, padTop = _a.padTop, padSides = _a.padSides;
    var classes = useStyles();
    return (react_1.default.createElement("div", { className: clsx_1.default((_b = {}, _b[classes.root] = true, _b[classes.padTop] = padTop, _b[classes.padSides] = padSides, _b)) }, children));
};
exports.default = SideBarContainer;
