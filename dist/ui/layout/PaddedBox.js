"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Fancy Pink Separator
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function (theme) {
    var _a;
    return ({
        root: (_a = {
                padding: theme.spacing(3)
            },
            _a[theme.breakpoints.up('sm')] = {
                paddingTop: theme.spacing(4),
            },
            _a),
    });
});
var PaddedBox = function (props) {
    var classes = useStyles();
    return react_1.default.createElement("div", { className: clsx_1.default(classes.root) }, props.children);
};
exports.default = PaddedBox;
