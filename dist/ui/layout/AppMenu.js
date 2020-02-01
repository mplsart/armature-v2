"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Global App Menu
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var Drawer_1 = __importDefault(require("@material-ui/core/Drawer"));
var useStyles = styles_1.makeStyles(function (theme) {
    var _a, _b;
    return ({
        drawerPaper: {
            backgroundColor: theme.palette.globalHeader.dark,
            color: '#9e9e9e',
            position: 'relative',
            height: '100%',
            width: theme.globalMenuWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            flex: 'none',
        },
        drawerInner: {
            // Make the items inside not wrap when transitioning:
            width: theme.globalMenuWidth,
            padding: theme.spacing(2),
            paddingTop: 0,
        },
        modal: (_a = {
                top: theme.appBarHeight.compact + "px !important"
            },
            _a[theme.breakpoints.up('sm')] = {
                top: theme.appBarHeight.default + "px !important",
            },
            _a),
        modalBackdrop: (_b = {
                top: theme.appBarHeight.compact
            },
            _b[theme.breakpoints.up('sm')] = {
                top: theme.appBarHeight.default,
            },
            _b),
    });
});
var SlideMenu = function (props) {
    var classes = useStyles({});
    var children = props.children, menuToggle = props.menuToggle, menuActive = props.menuActive;
    // TODO: Is this causing re-render?
    function wrappedMenuToggle() {
        menuToggle(false);
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", null,
            react_1.default.createElement(Drawer_1.default, { ModalProps: {
                    keepMounted: true,
                    BackdropProps: { className: classes.modalBackdrop },
                }, classes: {
                    paper: classes.drawerPaper,
                    modal: classes.modal,
                }, open: menuActive, onClose: wrappedMenuToggle },
                react_1.default.createElement("div", { className: classes.drawerInner }, children)))));
};
exports.default = SlideMenu;
