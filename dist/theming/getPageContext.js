"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getPageContext;

var _jss = require("jss");

var _styles = require("@material-ui/styles");

var _theme = _interopRequireDefault(require("./theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// A theme with custom primary and secondary color.
// It's optional.
function createPageContext() {
  return {
    theme: _theme["default"],
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new _jss.SheetsRegistry(),
    // The standard class name generator.
    generateClassName: (0, _styles.createGenerateClassName)()
  };
}

var pageContext;

function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  } // Reuse context on the client-side.


  if (!pageContext) {
    pageContext = createPageContext();
  }

  return pageContext;
}