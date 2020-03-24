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
// Artsy icon from: https://fontawesome.com/icons/calendar?style=light
var react_1 = __importDefault(require("react"));
var SvgIcon_1 = __importDefault(require("@material-ui/core/SvgIcon"));
var Artsy = function (props) {
    return (react_1.default.createElement(SvgIcon_1.default, __assign({ viewBox: "0 0 600 600" }, props),
        react_1.default.createElement("path", { d: "M71.9,571h500V71h-500V571L71.9,571z M536,535h-75.7v-98.6h-36V535H107.9V107H536V535z" }),
        react_1.default.createElement("path", { d: "M273.5,158.7h-39.7l-73.5,189.2h38l19.8-53.1h71.2l19.6,53.1h38C347,347.9,273.5,158.7,273.5,158.7z M229.3,262.8\n\t\tl24.4-65.8l24.1,65.8H229.3L229.3,262.8z" })));
};
exports.default = Artsy;
