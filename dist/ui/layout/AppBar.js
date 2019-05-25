"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AppBar;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/styles");

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _grid = require("../grid");

var _AppBarMenuIcon = _interopRequireDefault(require("./AppBarMenuIcon"));

var _link = _interopRequireDefault(require("next/link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// TODO: Hide on Scroll ? https://codesandbox.io/s/4z56yl6rm4

/*
let titleComponents = (
  <Link href="/">
    <a>MPLSART.COM</a>
  </Link>
);
*/
var rightComponents = _react["default"].createElement(_link["default"], {
  href: "/contact"
}, _react["default"].createElement("a", null, "contact")); //'YOLO';


var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _title;

  return {
    root: _defineProperty({
      backgroundColor: theme.palette.globalHeader.main,
      height: theme.appBarHeight.compact,
      minHeight: theme.appBarHeight.compact
    }, theme.breakpoints.up('sm'), {
      height: theme.appBarHeight["default"],
      minHeight: theme.appBarHeight["default"]
    }),
    gridContainer: _defineProperty({}, theme.breakpoints.down('md'), {
      paddingLeft: 0 // Alternately, we could be fluid at medium

    }),
    toolBar: _defineProperty({
      minHeight: theme.appBarHeight.compact
    }, theme.breakpoints.up('sm'), {
      minHeight: theme.appBarHeight["default"]
    }),
    title: (_title = {
      fontFamily: theme.fontFamily.accent,
      flex: 1,
      fontSize: '1.75rem',
      // TODO: This should be the hx styles...
      lineHeight: '1.75rem',
      textAlign: 'left'
    }, _defineProperty(_title, theme.breakpoints.down('md'), {
      // Center on mobile
      textAlign: 'center',
      fontSize: '1.5rem',
      // TODO: This should be the hx styles...
      lineHeight: '1.5rem'
    }), _defineProperty(_title, '& a', {
      fontWeight: 100,
      color: '#dfdfdf',
      // TODO: Power off palette
      '&:hover': {
        color: '#ffffff',
        // TODO: Power off palette
        textDecoration: 'none'
      }
    }), _title)
  };
});

function AppBar(_ref) {
  var fluid = _ref.fluid,
      menuActive = _ref.menuActive,
      poorlyNamedMenuToggle = _ref.poorlyNamedMenuToggle,
      titleComponents = _ref.titleComponents;
  var classes = useStyles();

  function handleClick() {
    poorlyNamedMenuToggle();
  }

  return _react["default"].createElement(_AppBar["default"], {
    className: classes.root,
    position: "sticky"
  }, _react["default"].createElement(_grid.Grid, {
    fluid: fluid,
    className: classes.gridContainer
  }, _react["default"].createElement(_Toolbar["default"], {
    className: classes.toolBar
  }, _react["default"].createElement(_AppBarMenuIcon["default"], {
    active: menuActive,
    handleMenuToggle: handleClick
  }), _react["default"].createElement(_Typography["default"], {
    type: "title",
    color: "inherit",
    className: classes.title
  }, titleComponents), rightComponents)));
}

AppBar.propTypes = {
  fluid: _propTypes["default"].bool,
  menuActive: _propTypes["default"].bool,
  poorlyNamedMenuToggle: _propTypes["default"].func.isRequired,
  titleComponents: _propTypes["default"].node
};