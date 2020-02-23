"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var SmallActionButton_1 = __importDefault(require("./SmallActionButton"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    moreWrap: {
        padding: theme.gutterSize,
        textAlign: 'center',
    },
}); });
var LoadMoreButton = function (props) {
    var hasMore = props.hasMore, loadMoreClickHandler = props.loadMoreClickHandler, displayLabel = props.displayLabel;
    var classes = useStyles();
    if (!hasMore) {
        return react_1.default.createElement(react_1.default.Fragment, null);
    }
    return (react_1.default.createElement("div", { className: classes.moreWrap },
        react_1.default.createElement(SmallActionButton_1.default, { onClick: loadMoreClickHandler }, displayLabel)));
};
exports.default = LoadMoreButton;
