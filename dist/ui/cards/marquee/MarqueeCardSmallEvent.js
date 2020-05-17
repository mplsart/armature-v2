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
// Marquee Event Small Card
var react_1 = __importDefault(require("react"));
var moment_timezone_1 = __importDefault(require("moment-timezone"));
var StandardCardBase_1 = __importDefault(require("../standard/StandardCardBase"));
var Calendar_1 = __importDefault(require("../../../icons/Calendar"));
var dates_1 = require("../../../utils/dates");
var MarqueeCardSmallEvent = function (props) {
    var resource = props.resource, startingDateFilter = props.startingDateFilter, rest = __rest(props, ["resource", "startingDateFilter"]);
    // Event Date
    var eventResource = resource;
    var targetEd = dates_1.getBestEventDate(resource.event_dates, startingDateFilter);
    if (!targetEd) {
        return react_1.default.createElement(react_1.default.Fragment, null);
    }
    // Determine date text to show
    var startMoment = moment_timezone_1.default(new Date(targetEd.start));
    var endMoment = moment_timezone_1.default(new Date(targetEd.end));
    var byLineText = dates_1.getShortDateString(startMoment, endMoment, moment_timezone_1.default(new Date()));
    var overlineText = targetEd.label;
    // Venue
    var venue_resource = targetEd.venue;
    if (eventResource.host_resource) {
        venue_resource = eventResource.host_resource;
        overlineText += ' • ';
    }
    else {
        overlineText += ' @ ';
    }
    var venue_name;
    if (venue_resource) {
        venue_name = venue_resource.nickname || venue_resource.name;
        if (venue_resource.multiple_locations_label) {
            venue_name = venue_resource.multiple_locations_label;
        }
    }
    // Overline
    overlineText += venue_name;
    return (react_1.default.createElement(StandardCardBase_1.default, __assign({ overlineText: overlineText, title: eventResource.name, byLineText: byLineText, byLineIcon: Calendar_1.default, imageResource: eventResource.primary_image_resource }, rest)));
};
exports.default = MarqueeCardSmallEvent;
