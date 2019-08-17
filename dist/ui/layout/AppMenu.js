"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SlideMenu;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/styles");

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// TODO: Run this off of the theme
var drawerWidth = 300;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    drawerPaper: {
      backgroundColor: theme.palette.globalHeader.dark,
      position: 'relative',
      height: '100%',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      flex: 'none'
    },
    drawerInner: {
      // Make the items inside not wrap when transitioning:
      width: drawerWidth,
      padding: theme.spacing(2),
      paddingTop: 0
    },
    modal: _defineProperty({
      top: "".concat(theme.appBarHeight.compact, "px !important")
    }, theme.breakpoints.up('sm'), {
      top: "".concat(theme.appBarHeight["default"], "px !important")
    }),
    modalBackdrop: _defineProperty({
      top: theme.appBarHeight.compact
    }, theme.breakpoints.up('sm'), {
      top: theme.appBarHeight["default"]
    })
  };
});

function SlideMenu(_ref) {
  var children = _ref.children,
      poorlyNamedMenuToggle = _ref.poorlyNamedMenuToggle,
      menuActive = _ref.menuActive;
  var classes = useStyles();
  return _react["default"].createElement("div", {
    className: classes.root
  }, _react["default"].createElement("div", {
    className: classes.appFrame
  }, _react["default"].createElement(_Drawer["default"], {
    ModalProps: {
      keepMounted: true,
      // Better open performance on mobile.
      BackdropProps: {
        className: classes.modalBackdrop
      }
    },
    classes: {
      paper: classes.drawerPaper,
      modal: classes.modal
    },
    open: menuActive,
    onClose: function onClose() {
      return poorlyNamedMenuToggle(false);
    }
  }, _react["default"].createElement("div", {
    className: classes.drawerInner
  }, children))));
}

SlideMenu.propTypes = {
  menuActive: _propTypes["default"].bool,
  poorlyNamedMenuToggle: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].node
};