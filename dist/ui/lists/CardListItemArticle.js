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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CardListItemBase_1 = __importDefault(require("./CardListItemBase"));
// TODO: This should be done in CSS
function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 2) + '...' : str;
}
var CardListItemArticle = function (props) {
    var resource = props.resource, rest = __rest(props, ["resource"]);
    // Image
    var imageUrl;
    var imageAltText = resource.title;
    if (resource.primary_image_resource &&
        resource.primary_image_resource.versions &&
        resource.primary_image_resource.versions.THUMB) {
        imageUrl = resource.primary_image_resource.versions.THUMB.url;
    }
    // Author Credit
    var overlineText = 'By ' + resource.author_name;
    return (react_1.default.createElement(CardListItemBase_1.default, __assign({ primaryText: truncate(resource.title, 60), overlineText: overlineText, imageUrl: imageUrl, imageAltText: imageAltText }, rest)));
};
exports.default = CardListItemArticle;
