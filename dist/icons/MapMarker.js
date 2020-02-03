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
// Map Marker (Solid) icon from: https://fontawesome.com/icons/map-marker-alt?style=solid
var react_1 = __importDefault(require("react"));
var SvgIcon_1 = __importDefault(require("@material-ui/core/SvgIcon"));
var MapMarker = function (props) {
    return (react_1.default.createElement(SvgIcon_1.default, __assign({ viewBox: "0 0 384 512" }, props),
        react_1.default.createElement("path", { d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" })));
};
exports.default = MapMarker;
