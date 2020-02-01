"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Fancy Pink Separator
var react_1 = __importDefault(require("react"));
var grid_1 = require("../grid");
var clsx_1 = __importDefault(require("clsx"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function (theme) {
    var _a;
    return ({
        root: (_a = {
                height: theme.spacing(4) / 2,
                backgroundColor: theme.palette.secondary.main,
                margin: theme.spacing(4) / 2 + "px 0",
                backgroundImage: 'url(https://storage.googleapis.com/cdn.mplsart.com/assets/separator.png)',
                backgroundRepeat: 'repeat-y',
                backgroundPosition: '100% 0'
            },
            _a[theme.breakpoints.down('md')] = {
                margin: theme.spacing(4) / 4 + "px 0",
            },
            _a),
        withMargin: {
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4),
            marginRight: theme.spacing(2),
        },
    });
});
var Separator = function (props) {
    var classes = useStyles();
    var targetClasses = ['fancy-separator'];
    if (props.withMargin) {
        targetClasses.push(classes.withMargin);
    }
    return (react_1.default.createElement(grid_1.Row, null,
        react_1.default.createElement(grid_1.Col, { xs: 12 },
            react_1.default.createElement("div", { className: clsx_1.default(classes.root, targetClasses) }))));
};
exports.default = Separator;
