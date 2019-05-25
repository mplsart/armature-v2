"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Footer;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: _objectSpread({}, theme.typography.caption, {
      'text-align': 'right',
      padding: theme.spacing(2)
    })
  };
});

function Footer() {
  var classes = useStyles();
  return _react["default"].createElement("footer", {
    className: classes.root
  }, _react["default"].createElement("p", null, "We love art. We love you. \xA9 2019 MPLSART.COM "));
}

Footer.propTypes = {};