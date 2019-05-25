"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Separator;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _grid = require("../grid");

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: _defineProperty({
      height: theme.spacing(4) / 2,
      backgroundColor: theme.palette.secondary.main,
      margin: "".concat(theme.spacing(4) / 2, "px 0"),
      backgroundImage: 'url(https://storage.googleapis.com/cdn.mplsart.com/assets/separator.png)',
      backgroundRepeat: 'repeat-y',
      backgroundPosition: '100% 0'
    }, theme.breakpoints.down('md'), {
      margin: "".concat(theme.spacing(4) / 4, "px 0")
    }),
    withMargin: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      marginRight: theme.spacing(2)
    }
  };
});

function Separator(_ref) {
  var withMargin = _ref.withMargin;
  var classes = useStyles();
  var targetClasses = ['fancy-separator'];

  if (withMargin) {
    targetClasses.push(classes.withMargin);
  }

  return _react["default"].createElement(_grid.Row, null, _react["default"].createElement(_grid.Col, {
    xs: 12
  }, _react["default"].createElement("div", {
    className: (0, _clsx["default"])(classes.root, targetClasses)
  })));
} // prop definitions


Separator.propTypes = {
  className: _propTypes["default"].string,
  withMargin: _propTypes["default"].bool
};