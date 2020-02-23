"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Padded Box
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        padding: theme.spacing(2),
    },
    left: { textAlign: 'left' },
    right: { textAlign: 'right' },
    center: { textAlign: 'center' },
}); });
var PaddedBox = function (props) {
    var _a;
    var classes = useStyles();
    var children = props.children, align = props.align;
    if (!align) {
        align = 'center';
    }
    var classnames = (_a = {},
        _a[classes.root] = true,
        _a[classes[align]] = true,
        _a);
    return react_1.default.createElement("div", { className: clsx_1.default(classnames) }, children);
};
PaddedBox.defaultProps = { align: 'left' };
exports.default = PaddedBox;
