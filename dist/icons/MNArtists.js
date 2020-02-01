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
// Custom Icon for mnartists.org
var react_1 = __importDefault(require("react"));
var SvgIcon_1 = __importDefault(require("@material-ui/core/SvgIcon"));
var MNArtists = function (props) {
    return (react_1.default.createElement(SvgIcon_1.default, __assign({ viewBox: "0 0 20.04 12.67" }, props),
        react_1.default.createElement("polygon", { className: "cls-1", points: "20.04 4.74 20.01 4.7 20.01 4.66 7.94 5.72 4.79 0 4.75 0.02 4.71 0.01 0 12.62 0.04 12.63 0.04 12.67 9.51 12.11 9.51 12.07 9.53 12.1 20.04 4.74" })));
};
exports.default = MNArtists;
