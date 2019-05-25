"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HamburgerMenu;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/styles");

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _menuButtonJazzy;

  return {
    menuButtonJazzy: (_menuButtonJazzy = {
      transition: 'background-color 0.3s',
      marginLeft: -1 * theme.spacing(2),
      marginRight: -1 * theme.spacing(2),
      padding: 15,
      borderRadius: 0,
      height: theme.appBarHeight.compact,
      width: theme.appBarHeight.compact
    }, _defineProperty(_menuButtonJazzy, theme.breakpoints.up('sm'), {
      marginLeft: -1 * theme.spacing(3),
      marginRight: theme.spacing(2),
      height: theme.appBarHeight["default"],
      width: theme.appBarHeight["default"]
    }), _defineProperty(_menuButtonJazzy, '&:hover', {
      backgroundColor: theme.palette.globalHeader.light
    }), _menuButtonJazzy),
    menuButtonJazzyLink: {
      '&:hover': {
        textDecoration: 'none'
      }
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
      '&.patty1': {
        top: 12
      },
      '&.patty3': {
        top: -12
      },
      '&.patty2.active': {
        backgroundColor: 'transparent'
      },
      '&.patty1.active, &.patty3.active': {
        backgroundColor: theme.palette.primary.main
      },
      '&.patty1.active': {
        top: 4,
        transform: 'rotate(45deg)'
      },
      '&.patty3.active': {
        top: -2,
        transform: 'rotate(-45deg)'
      }
    }
  };
});

function HamburgerMenu(_ref) {
  var active = _ref.active,
      handleMenuToggle = _ref.handleMenuToggle;
  var classes = useStyles();
  var pattyClasses = [classes.menuButtonJazzyPatty, active && 'active'];
  active = true;
  return _react["default"].createElement(_IconButton["default"], {
    onClick: handleMenuToggle,
    className: (0, _clsx["default"])(classes.menuButtonJazzy, active && 'active'),
    color: "default",
    "aria-label": "Menu"
  }, _react["default"].createElement("a", {
    className: classes.menuButtonJazzyLink,
    id: "side_nav_toggle",
    title: "Show Menu"
  }, _react["default"].createElement("span", {
    className: (0, _clsx["default"])(pattyClasses, 'patty1')
  }, "\xA0"), _react["default"].createElement("span", {
    className: (0, _clsx["default"])(pattyClasses, 'patty2')
  }, "\xA0"), _react["default"].createElement("span", {
    className: (0, _clsx["default"])(pattyClasses, 'patty3')
  }, "\xA0")));
}

HamburgerMenu.propTypes = {
  active: _propTypes["default"].bool,
  handleMenuToggle: _propTypes["default"].func.isRequired
};