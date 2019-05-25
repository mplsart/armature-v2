"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PageBase;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Base Wrapper for Pages
// This might be slightly overkill, but gives us an edge for loading states
function PageBase(_ref) {
  var children = _ref.children;
  return _react["default"].createElement(_react["default"].Fragment, null, children);
}

PageBase.propTypes = {
  children: _propTypes["default"].node
};