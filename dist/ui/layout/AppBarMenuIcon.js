"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var styles_1 = require("@material-ui/core/styles");
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var useStyles = styles_1.makeStyles(function (theme) {
    var _a;
    return {
        menuButtonJazzy: (_a = {
                transition: 'background-color 0.3s',
                marginLeft: -1 * theme.spacing(2),
                marginRight: -1 * theme.spacing(2),
                padding: 15,
                borderRadius: 0,
                height: theme.appBarHeight.compact,
                width: theme.appBarHeight.compact
            },
            _a[theme.breakpoints.up('sm')] = {
                marginLeft: -1 * theme.spacing(3),
                marginRight: theme.spacing(2),
                height: theme.appBarHeight.default,
                width: theme.appBarHeight.default,
            },
            _a['&:hover'] = {
                backgroundColor: theme.palette.globalHeader.light,
            },
            _a),
        menuButtonJazzyLink: {
            '&:hover': {
                textDecoration: 'none',
            },
        },
        menuButtonJazzyPatty: {
            //Span
            display: 'block',
            position: 'relative',
            cursor: 'pointer',
            borderRadius: 1,
            height: 3,
            width: 25,
            backgroundColor: 'white',
            content: '"."',
            marginLeft: 'auto',
            marginRight: 'auto',
            transition: 'all 500ms ease-in-out',
            '&.patty1': { top: 12 },
            '&.patty3': { top: -12 },
            '&.patty2.active': { backgroundColor: 'transparent' },
            '&.patty1.active, &.patty3.active': {
                backgroundColor: theme.palette.primary.main,
            },
            '&.patty1.active': { top: 4, transform: 'rotate(45deg)' },
            '&.patty3.active': { top: -2, transform: 'rotate(-45deg)' },
        },
    };
});
var AppBarMenuIcon = function (props) {
    var classes = useStyles();
    var active = props.active, handleMenuToggle = props.handleMenuToggle;
    var pattyClasses = [classes.menuButtonJazzyPatty, active && 'active'];
    // TODO: Is this causing re-render?
    function wrappedMenuToggle() {
        handleMenuToggle();
    }
    return (react_1.default.createElement(IconButton_1.default, { onClick: wrappedMenuToggle, className: clsx_1.default(classes.menuButtonJazzy, active && 'active'), color: "default", "aria-label": "Menu" },
        react_1.default.createElement("a", { className: classes.menuButtonJazzyLink, id: "side_nav_toggle", title: "Show Menu" },
            react_1.default.createElement("span", { className: clsx_1.default(pattyClasses, 'patty1') }, "\u00A0"),
            react_1.default.createElement("span", { className: clsx_1.default(pattyClasses, 'patty2') }, "\u00A0"),
            react_1.default.createElement("span", { className: clsx_1.default(pattyClasses, 'patty3') }, "\u00A0"))));
};
exports.default = AppBarMenuIcon;
