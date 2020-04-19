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
// List Event Card
var react_1 = __importDefault(require("react"));
var moment_1 = __importDefault(require("moment"));
var CardListItemBase_1 = __importDefault(require("./CardListItemBase"));
var dates_1 = require("../../utils/dates");
var CardListItemEventDate = function (props) {
    var resource = props.resource, rest = __rest(props, ["resource"]);
    // Isolate Event Date
    var eventResource = resource.event_resource;
    var targetEd = resource;
    if (!targetEd) {
        return react_1.default.createElement(react_1.default.Fragment, null);
    }
    // Image
    var imageUrl;
    var imageAltText = eventResource.name;
    if (eventResource.primary_image_resource &&
        eventResource.primary_image_resource.versions &&
        eventResource.primary_image_resource.versions.THUMB) {
        imageUrl = eventResource.primary_image_resource.versions.THUMB.url;
    }
    // Determine date text to show
    var startMoment = moment_1.default(new Date(targetEd.start));
    var endMoment = moment_1.default(new Date(targetEd.end));
    var byLineText = dates_1.getShortDateString(startMoment, endMoment, moment_1.default(new Date()));
    // Venue
    var venue_resource = resource.venue_resource;
    var venue_name = venue_resource.nickname || venue_resource.name;
    if (venue_resource.multiple_locations_label) {
        venue_name = venue_resource.multiple_locations_label;
    }
    // Overline
    var secondaryText = targetEd.label + " @ " + venue_name;
    return (react_1.default.createElement(CardListItemBase_1.default, __assign({ primaryText: eventResource.name, secondaryText: secondaryText, overlineText: byLineText, imageUrl: imageUrl, imageAltText: imageAltText, deemphasize: targetEd.canceled }, rest)));
};
exports.default = CardListItemEventDate;
