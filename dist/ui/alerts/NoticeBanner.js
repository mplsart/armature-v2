"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        width: '100%',
        backgroundColor: '#FFF59D',
        padding: theme.spacing(3),
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
}); });
var NoticeBanner = function (_a) {
    var children = _a.children;
    var classes = useStyles();
    return react_1.default.createElement("div", { className: classes.root }, children);
};
exports.default = NoticeBanner;
