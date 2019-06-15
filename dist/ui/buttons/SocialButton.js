"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SocialButton;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _Twitter = _interopRequireDefault(require("../../icons/Twitter"));

var _Facebook = _interopRequireDefault(require("../../icons/Facebook"));

var _Instagram = _interopRequireDefault(require("../../icons/Instagram"));

var _Tumblr = _interopRequireDefault(require("../../icons/Tumblr"));

var _YouTube = _interopRequireDefault(require("../../icons/YouTube"));

var _Vimeo = _interopRequireDefault(require("../../icons/Vimeo"));

var _OtherLink = _interopRequireDefault(require("../../icons/OtherLink"));

var _MNArtists = _interopRequireDefault(require("../../icons/MNArtists"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var serviceComponentMap = {
  instagram: _Instagram["default"],
  facebook: _Facebook["default"],
  twitter: _Twitter["default"],
  tumblr: _Tumblr["default"],
  youtube: _YouTube["default"],
  vimeo: _Vimeo["default"],
  mnartists: _MNArtists["default"],
  other: _OtherLink["default"]
};
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      borderRadius: 0,
      margin: "".concat(theme.spacing(1), "px"),
      //margin: `${theme.spacing(4)}px 0 ${theme.spacing(4)}px 0`,
      backgroundColor: 'lime',
      //theme.palette.secondary.main,
      color: '#ffffff',
      '&:hover': {
        backgroundColor: theme.palette.primary.dark
      }
    },
    label: {
      '& svg': {
        fontSize: '24px'
      }
    }
  };
});

function SocialButton(_ref) {
  var component = _ref.component,
      service = _ref.service,
      rest = _objectWithoutProperties(_ref, ["component", "service"]);

  var classes = useStyles();
  var temp = {
    component: 'a'
  };

  if (component) {
    temp.component = component;
  }

  var IconComponent = serviceComponentMap[service];
  return _react["default"].createElement(_IconButton["default"], _extends({
    component: temp.component
  }, rest, {
    "aria-label": service,
    classes: {
      root: classes.root,
      label: classes.label
    }
  }), "x", _react["default"].createElement(IconComponent, null), "x");
}

SocialButton.propTypes = {
  service: _propTypes["default"].string,
  component: _propTypes["default"].func
};