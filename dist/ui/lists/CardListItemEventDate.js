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
var moment_1 = __importDefault(require("moment"));
var CardListItemEventDate = function (props) {
    var resource = props.resource, rest = __rest(props, ["resource"]);
    var target_event_date = resource;
    var event_resource = resource.event_resource;
    // Image
    var imageUrl;
    var imageAltText = event_resource.name;
    if (event_resource.primary_image_resource &&
        event_resource.primary_image_resource.versions &&
        event_resource.primary_image_resource.versions.THUMB) {
        imageUrl = event_resource.primary_image_resource.versions.THUMB.url;
    }
    var byLineText = '';
    var edLabel = '';
    // If it is ongoing - worst case scenario
    if (target_event_date.category == 'ongoing') {
        byLineText =
            moment_1.default(new Date(target_event_date.start)).format('MMM D') +
                ' - ' +
                moment_1.default(new Date(target_event_date.end)).format('MMM D');
    }
    else {
        // Else show the end
        byLineText = moment_1.default(new Date(target_event_date.start)).format('ddd MMM D');
        edLabel = target_event_date.label;
    }
    var overlineText = '';
    var venue_resource = resource.venue_resource;
    var venue_name = venue_resource.nickname || venue_resource.name;
    if (venue_resource.multiple_locations_label) {
        venue_name = venue_resource.multiple_locations_label;
    }
    // Overline
    overlineText = edLabel + ' @ ' + venue_name;
    return (react_1.default.createElement(CardListItemBase_1.default
    //button
    , __assign({ 
        //button
        primaryText: event_resource.name, secondaryText: overlineText, 
        //underlineText={overlineText}
        overlineText: byLineText, imageUrl: imageUrl, imageAltText: imageAltText }, rest)));
};
exports.default = CardListItemEventDate;
