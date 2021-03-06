"use strict";
// Base Wrapper for Pages
// This might be slightly overkill, but gives us an edge for loading states
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var PageBase = function (_a) {
    var children = _a.children;
    return react_1.default.createElement(react_1.default.Fragment, null, children);
};
exports.default = PageBase;
