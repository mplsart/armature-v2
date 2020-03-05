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
var StandardCardEventDate = function (props) {
    var eventResource = props.eventResource, eventDateResource = props.eventDateResource, rest = __rest(props, ["eventResource", "eventDateResource"]);
    // Event Date
    var target_event_date = eventDateResource;
    var byLineText;
    // If it is ongoing - worst case scenario
    if (target_event_date.category == 'ongoing') {
        byLineText =
            moment_timezone_1.default(new Date(target_event_date.start)).format('MMM D') +
                ' - ' +
                moment_timezone_1.default(new Date(target_event_date.end)).format('MMM D');
    }
    else {
        // Else show the start
        byLineText = moment_timezone_1.default(new Date(target_event_date.start)).format('ddd MMM D');
    }
    // Venue
    var venue_resource = target_event_date.venue_resource;
    var venue_name = venue_resource.nickname || venue_resource.name;
    if (venue_resource.multiple_locations_label) {
        venue_name = venue_resource.multiple_locations_label;
    }
    // Overline
    var overlineText = target_event_date.label + ' @ ' + venue_name;
    return (react_1.default.createElement(StandardCardBase_1.default, __assign({ overlineText: overlineText, title: eventResource.name, byLineText: byLineText, byLineIcon: Calendar_1.default, imageResource: eventResource.primary_image_resource }, rest)));
};
exports.default = StandardCardEventDate;
