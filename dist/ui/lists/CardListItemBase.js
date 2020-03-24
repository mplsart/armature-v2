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
// Base List Card
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var styles_1 = require("@material-ui/core/styles");
var CardMedia_1 = __importDefault(require("@material-ui/core/CardMedia"));
var ListItem_1 = __importDefault(require("@material-ui/core/ListItem"));
var ListItemIcon_1 = __importDefault(require("@material-ui/core/ListItemIcon"));
var ListItemText_1 = __importDefault(require("@material-ui/core/ListItemText"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var Overline_1 = __importDefault(require("../../typography/Overline"));
var ListActionButton_1 = __importDefault(require("../buttons/ListActionButton"));
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        width: '100%',
        padding: '12px !important',
        overflowX: 'hidden',
        '&.deemphasize': {
            filter: 'grayscale(1) opacity(25%)',
        },
    },
    image: {
        width: '80px',
        height: '80px',
        marginRight: '0px',
    },
    text: {
        padding: '0 16px',
        margin: 0,
        '& h6': __assign(__assign({}, theme.typography.h2), { fontFamily: theme.fontFamily.accent, marginTop: '0.35em', fontSize: theme.typography.pxToRem(16), lineHeight: theme.typography.pxToRem(16), letterSpacing: '-0.00833em', fontWeight: 400, marginBottom: 0 }),
        '&.highlightPrimary h2': {
            color: theme.palette.primary.main,
        },
        '&.dense': {
            padding: 0,
        },
    },
}); });
var CardListItemBase = function (props) {
    var _a;
    var imageFloat = props.imageFloat, highlightPrimary = props.highlightPrimary, imageUrl = props.imageUrl, imageAltText = props.imageAltText, primaryText = props.primaryText, secondaryText = props.secondaryText, overlineText = props.overlineText, underlineText = props.underlineText, linkClassProps = props.linkClassProps, actionButtonProps = props.actionButtonProps, deemphasize = props.deemphasize, rest = __rest(props, ["imageFloat", "highlightPrimary", "imageUrl", "imageAltText", "primaryText", "secondaryText", "overlineText", "underlineText", "linkClassProps", "actionButtonProps", "deemphasize"]);
    var classes = useStyles();
    var imageNode;
    var underlineNode, overlineNode;
    // Image
    if (imageUrl) {
        imageNode = (react_1.default.createElement(ListItemIcon_1.default, null,
            react_1.default.createElement(CardMedia_1.default, { className: clsx_1.default(classes.image), image: imageUrl, title: imageAltText })));
    }
    // Textual Content
    if (overlineText) {
        overlineNode = react_1.default.createElement(Overline_1.default, null, overlineText);
    }
    if (underlineText) {
        underlineNode = (react_1.default.createElement(Overline_1.default, null,
            react_1.default.createElement("em", null, underlineText)));
    }
    // Tweak button bool to be true bool
    var primaryTextNode = (react_1.default.createElement("span", null,
        overlineNode,
        react_1.default.createElement(Typography_1.default, { variant: "subtitle2", component: "h2" }, primaryText),
        underlineNode));
    var secondaryTextNode = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Overline_1.default, null, secondaryText),
        actionButtonProps && react_1.default.createElement(ListActionButton_1.default, __assign({}, actionButtonProps))));
    return (react_1.default.createElement(ListItem_1.default, __assign({ button: true, className: clsx_1.default((_a = {}, _a[classes.root] = true, _a.deemphasize = deemphasize, _a)) }, rest, linkClassProps),
        imageFloat == 'left' && imageNode,
        react_1.default.createElement(ListItemText_1.default, { classes: {
                root: clsx_1.default(classes.text, rest.dense ? 'dense' : '', highlightPrimary ? 'highlightPrimary' : ''),
            }, primary: primaryTextNode, secondary: secondaryTextNode, disableTypography: true }),
        imageFloat == 'right' && imageNode));
};
exports.default = CardListItemBase;
