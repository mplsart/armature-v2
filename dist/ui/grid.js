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
// Simple Grid Wrapper
// TODO: We should see how much of this is needed now with MUI 4
var react_1 = __importDefault(require("react"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var styles_1 = require("@material-ui/core/styles");
var clsx_1 = __importDefault(require("clsx"));
var useStyles = styles_1.makeStyles(function (theme) {
    var _a;
    return {
        fluidContainer: {
            width: '100%',
            flexGrow: 1,
        },
        legacyContainer: (_a = {
                marginRight: 'auto',
                marginLeft: 'auto',
                width: '100%',
                flexGrow: 1,
                paddingRight: 0,
                paddingLeft: 0
            },
            _a[theme.breakpoints.only('xs')] = {
                width: '100%',
            },
            _a[theme.breakpoints.only('sm')] = {
                width: '100%',
            },
            _a[theme.breakpoints.only('md')] = {
                width: theme.breakpoints.width('md'),
            },
            _a[theme.breakpoints.only('lg')] = {
                width: theme.breakpoints.width('lg'),
            },
            _a[theme.breakpoints.only('xl')] = {
                // force width of lg
                width: theme.breakpoints.width('lg'),
            },
            _a),
        alignRight: { marginRight: 0 },
        alignLeft: { marginLeft: 0 },
        typeContainer: {},
        typeItem: {},
    };
});
var Grid = function (props) {
    var align = props.align, className = props.className, children = props.children, fluid = props.fluid, rest = __rest(props, ["align", "className", "children", "fluid"]);
    var classes = useStyles();
    var collectedClasses = [className];
    if (fluid) {
        collectedClasses.push(classes.fluidContainer);
    }
    else {
        collectedClasses.push(classes.legacyContainer);
        if (align) {
            if (align === 'right') {
                collectedClasses.push(classes.alignRight);
            }
            else if (align === 'left') {
                collectedClasses.push(classes.alignLeft);
            }
        }
    }
    return (react_1.default.createElement("div", __assign({ className: clsx_1.default(collectedClasses) }, rest), children));
};
exports.Grid = Grid;
var Row = function (props) {
    var className = props.className, children = props.children, rest = __rest(props, ["className", "children"]);
    var classes = useStyles();
    //let className = props.className;
    // TODO: What is spacing these days?
    return (react_1.default.createElement(Grid_1.default, __assign({ spacing: 0, container: true, className: clsx_1.default(classes.typeContainer, className) }, rest), children));
};
exports.Row = Row;
var Col = function (props) {
    var classes = useStyles();
    var className = props.className, children = props.children, rest = __rest(props, ["className", "children"]);
    return (react_1.default.createElement(Grid_1.default, __assign({ item: true }, rest, { className: clsx_1.default(classes.typeItem, className) }), children));
};
exports.Col = Col;
