"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var CircularProgress_1 = __importDefault(require("@material-ui/core/CircularProgress"));
var useStyles = styles_1.makeStyles(function (theme) { return ({
    progress: {
        margin: "0 " + theme.gutterSize * 2 + "px",
    },
}); });
var PageLoadingProgress = function () {
    var classes = useStyles();
    return react_1.default.createElement(CircularProgress_1.default, { className: classes.progress, size: 60, color: "secondary" });
};
exports.default = PageLoadingProgress;
