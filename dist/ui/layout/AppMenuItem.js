"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AppMenuItem;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/styles");

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    listItem: _objectSpread({}, theme.typography.subheading, {
      color: theme.palette.primary.main,
      borderBottom: "1px solid ".concat(theme.palette.grey[800]),
      fontSize: 18,
      padding: theme.spacing(),
      '&:hover': {
        color: theme.palette.primary.dark,
        textDecoration: 'none'
      }
    })
  };
});

function AppMenuItem(_ref) {
  var children = _ref.children,
      component = _ref.component,
      rest = _objectWithoutProperties(_ref, ["children", "component"]);

  var classes = useStyles();
  var Component = component;
  return _react["default"].createElement(_ListItem["default"], {
    button: true,
    className: classes.listItem
  }, _react["default"].createElement(Component, rest, children));
}

AppMenuItem.propTypes = {
  children: _propTypes["default"].node,
  component: _propTypes["default"].any
};