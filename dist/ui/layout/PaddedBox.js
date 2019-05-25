"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PaddedBox;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: _defineProperty({
      padding: theme.spacing(3)
    }, theme.breakpoints.up('sm'), {
      paddingTop: theme.spacing(4)
    })
  };
});

function PaddedBox(_ref) {
  var children = _ref.children;
  var classes = useStyles();
  return _react["default"].createElement("div", {
    className: (0, _clsx["default"])(classes.root)
  }, children);
} // prop definitions


PaddedBox.propTypes = {
  children: _propTypes["default"].node.isRequired
};