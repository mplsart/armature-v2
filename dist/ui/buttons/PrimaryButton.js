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
/* Default Styles For Default Primary Button */
var react_1 = __importDefault(require("react"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var PrimaryButton = function (props) {
    return react_1.default.createElement(Button_1.default, __assign({ variant: "contained", color: "primary" }, props));
};
exports.default = react_1.default.memo(PrimaryButton);
