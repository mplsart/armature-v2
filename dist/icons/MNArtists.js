"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MNArtists;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function MNArtists(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    viewBox: "0 0 20.04 12.67"
  }, props), _react["default"].createElement("polygon", {
    className: "cls-1",
    points: "20.04 4.74 20.01 4.7 20.01 4.66 7.94 5.72 4.79 0 4.75 0.02 4.71 0.01 0 12.62 0.04 12.63 0.04 12.67 9.51 12.11 9.51 12.07 9.53 12.1 20.04 4.74"
  }));
}