"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = Grid;
exports.Row = Row;
exports.Col = Col;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _styles = require("@material-ui/styles");

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _legacyContainer;

  return {
    fluidContainer: {
      width: '100%',
      flexGrow: 1
    },
    legacyContainer: (_legacyContainer = {
      marginRight: 'auto',
      marginLeft: 'auto',
      width: '100%',
      // xs,sm
      flexGrow: 1,
      paddingRight: 0,
      paddingLeft: 0
    }, _defineProperty(_legacyContainer, theme.breakpoints.only('xs'), {
      width: '100%'
    }), _defineProperty(_legacyContainer, theme.breakpoints.only('sm'), {
      width: '100%'
    }), _defineProperty(_legacyContainer, theme.breakpoints.only('md'), {
      width: theme.breakpoints.width('md')
    }), _defineProperty(_legacyContainer, theme.breakpoints.only('lg'), {
      width: theme.breakpoints.width('lg')
    }), _defineProperty(_legacyContainer, theme.breakpoints.only('xl'), {
      // force width of lg
      width: theme.breakpoints.width('lg')
    }), _legacyContainer),
    alignRight: {
      marginRight: 0
    },
    alignLeft: {
      marginLeft: 0
    },
    typeContainer: {},
    typeItem: {}
  };
});

function Grid(_ref) {
  var align = _ref.align,
      className = _ref.className,
      children = _ref.children,
      fluid = _ref.fluid,
      rest = _objectWithoutProperties(_ref, ["align", "className", "children", "fluid"]);

  var classes = useStyles();
  var collectedClasses = [className];

  if (fluid) {
    collectedClasses.push(classes.fluidContainer);
  } else {
    collectedClasses.push(classes.legacyContainer);

    if (align) {
      if (align === 'right') {
        collectedClasses.push(classes.alignRight);
      } else if (align === 'left') {
        collectedClasses.push(classes.alignLeft);
      }
    }
  }

  return _react["default"].createElement("div", _extends({
    className: (0, _clsx["default"])(collectedClasses)
  }, rest), children);
}

Grid.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  classes: _propTypes["default"].object,
  fluid: _propTypes["default"].bool,
  align: _propTypes["default"].oneOf(['left', 'right'])
};

function Row(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ["className", "children"]);

  var classes = useStyles(); // TODO: What is spacing these days?

  return _react["default"].createElement(_Grid["default"], _extends({
    spacing: Number(0),
    container: true,
    className: (0, _clsx["default"])(classes.typeContainer, className)
  }, rest), children);
}

Row.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  classes: _propTypes["default"].object
};

function Col(props) {
  var classes = useStyles();

  var className = props.className,
      children = props.children,
      rest = _objectWithoutProperties(props, ["className", "children"]);

  return _react["default"].createElement(_Grid["default"], _extends({
    item: true
  }, rest, {
    className: (0, _clsx["default"])(classes.typeItem, className)
  }), children);
}

Col.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  classes: _propTypes["default"].object
};