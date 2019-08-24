"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Lead;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
      fontWeight: 300
    },
    paragraph: {
      marginBottom: theme.spacing(4)
    }
  };
});

function Lead(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  var classes = useStyles();
  return _react["default"].createElement(_Typography["default"], _extends({
    component: "p",
    variant: "body2",
    classes: {
      root: classes.root,
      paragraph: classes.paragraph
    },
    gutterBottom: true,
    color: "inherit"
  }, rest), children);
}

Lead.propTypes = {
  children: _propTypes["default"].node.isRequired
};