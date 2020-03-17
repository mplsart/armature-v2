"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var AppBar_1 = __importDefault(require("@material-ui/core/AppBar"));
var Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var grid_1 = require("../grid");
var AppBarMenuIcon_1 = __importDefault(require("./AppBarMenuIcon"));
// TODO: Hide on Scroll ? https://codesandbox.io/s/4z56yl6rm4
/*
let titleComponents = (
  <Link href="/">
    <a>MPLSART.COM</a>
  </Link>
);
*/
var rightComponents = react_1.default.createElement(react_1.default.Fragment, null);
var useStyles = styles_1.makeStyles(function (theme) {
    var _a, _b, _c, _d;
    return {
        root: (_a = {
                backgroundColor: "" + theme.palette.globalHeader.main,
                height: theme.appBarHeight.compact,
                minHeight: theme.appBarHeight.compact
            },
            _a[theme.breakpoints.up('sm')] = {
                height: theme.appBarHeight.default,
                minHeight: theme.appBarHeight.default,
            },
            _a),
        gridContainer: (_b = {},
            // When the grid isn't fluid, but is small enough, hide the gutter padding
            _b[theme.breakpoints.down('md')] = {
                paddingLeft: 0,
            },
            _b),
        toolBar: (_c = {
                minHeight: theme.appBarHeight.compact
            },
            _c[theme.breakpoints.up('sm')] = {
                minHeight: theme.appBarHeight.default,
            },
            _c),
        title: (_d = {
                fontFamily: theme.fontFamily.accent,
                flex: 1,
                fontSize: theme.typography.pxToRem(25),
                lineHeight: theme.typography.pxToRem(25),
                textAlign: 'left',
                fontWeight: 100,
                marginTop: 2,
                letterSpacing: 'normal'
            },
            _d[theme.breakpoints.down('md')] = {
                // Center on mobile
                textAlign: 'center',
                fontSize: theme.typography.pxToRem(26),
                lineHeight: theme.typography.pxToRem(10),
                color: '#dfdfdf',
            },
            _d['& a'] = {
                fontWeight: 100,
                color: '#dfdfdf',
                '&:hover': {
                    color: '#ffffff',
                    textDecoration: 'none',
                },
            },
            _d),
    };
});
var AppBar = function (props) {
    var classes = useStyles();
    var fluid = props.fluid, menuActive = props.menuActive, menuToggle = props.menuToggle, titleComponents = props.titleComponents;
    return (react_1.default.createElement(AppBar_1.default, { className: classes.root, position: "sticky" },
        react_1.default.createElement(grid_1.Grid, { fluid: fluid, className: classes.gridContainer },
            react_1.default.createElement(Toolbar_1.default, { className: classes.toolBar },
                react_1.default.createElement(AppBarMenuIcon_1.default, { active: menuActive, handleMenuToggle: menuToggle }),
                react_1.default.createElement(Typography_1.default, { variant: "subtitle1", component: "div", color: "inherit", className: classes.title }, titleComponents),
                rightComponents))));
};
exports.default = AppBar;
