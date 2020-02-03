"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Newspaper (Light) icon from: https://fontawesome.com/icons/newspaper?style=light
var react_1 = __importDefault(require("react"));
var SvgIcon_1 = __importDefault(require("@material-ui/core/SvgIcon"));
var Newspaper = function (props) {
    return (react_1.default.createElement(SvgIcon_1.default, __assign({ viewBox: "0 0  576 512" }, props),
        react_1.default.createElement("path", { d: "M552 64H88c-13.234 0-24 10.767-24 24v8H24c-13.255 0-24 10.745-24 24v280c0 26.51 21.49 48 48 48h504c13.233 0 24-10.767 24-24V88c0-13.233-10.767-24-24-24zM32 400V128h32v272c0 8.822-7.178 16-16 16s-16-7.178-16-16zm512 16H93.258A47.897 47.897 0 0 0 96 400V96h448v320zm-404-96h168c6.627 0 12-5.373 12-12V140c0-6.627-5.373-12-12-12H140c-6.627 0-12 5.373-12 12v168c0 6.627 5.373 12 12 12zm20-160h128v128H160V160zm-32 212v-8c0-6.627 5.373-12 12-12h168c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H140c-6.627 0-12-5.373-12-12zm224 0v-8c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-64v-8c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-128v-8c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 64v-8c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z" })));
};
exports.default = Newspaper;
