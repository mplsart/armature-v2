"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment-timezone");
// Date Utils
function eventDateSort(ed1, ed2) {
    // Usage: let sorted = event_resource.event_dates.sort(sort_eventdates_by_start)
    if (ed1.start === ed2.start)
        return 0;
    if (ed1.start > ed2.start)
        return -1;
    return 1;
}
exports.eventDateSort = eventDateSort;
/** Given an event resource, attempt to find the best event date based on filter
 *
 *
 */
function getBestEventDate(eventDates, starting_date_filter, type_filter) {
    if (type_filter === void 0) { type_filter = null; }
    var target_event_date = null;
    //var now = get_runtime_constants().today_end_date_utc;
    //var start_today = get_runtime_constants().today_start_date_utc;
    // This check is mostly for broken data
    if (!eventDates) {
        return null;
    }
    var sorted_event_dates = eventDates.sort(eventDateSort);
    var startDateFilterMoment = starting_date_filter;
    // If there is an event date type filter, find the first occurence of the match, and in the case of the 'timed' events, the first that hasn't started yet
    if (type_filter) {
        for (var i in sorted_event_dates) {
            if (sorted_event_dates[i].type == type_filter) {
                if ((type_filter == 'timed' && moment(new Date(sorted_event_dates[i].start)) > startDateFilterMoment) ||
                    type_filter != 'timed') {
                    target_event_date = sorted_event_dates[i];
                    break;
                }
            }
        }
    }
    else {
        // No targeted date type so lets find the soonest one that hasn't happened yet
    }
    // Worst case scenerio, go with the first
    if (!target_event_date) {
        target_event_date = sorted_event_dates[0];
    }
    return target_event_date;
}
exports.getBestEventDate = getBestEventDate;
