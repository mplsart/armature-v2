"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SideBarContainer;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/styles");

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      margin: "".concat(theme.spacing(4), "px"),
      //margin: `${theme.spacing(4)}px 0 ${theme.spacing(4)}px 0`,
      borderTop: '1px solid #000000'
    },
    padTop: _defineProperty({
      marginTop: theme.spacing(0)
    }, theme.breakpoints.up('md'), {
      marginTop: theme.spacing(11)
    })
  };
});

function SideBarContainer(_ref) {
  var _classnames;

  var children = _ref.children,
      padTop = _ref.padTop;
  var classes = useStyles();
  return _react["default"].createElement("div", {
    className: (0, _clsx["default"])((_classnames = {}, _defineProperty(_classnames, classes.root, true), _defineProperty(_classnames, classes.padTop, padTop), _classnames))
  }, children);
}

SideBarContainer.propTypes = {
  children: _propTypes["default"].any.isRequired,
  padTop: _propTypes["default"].bool
};