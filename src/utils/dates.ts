import { EventDateResource } from '../ui/cards/marquee/MarqueeCardSmallEvent';
import moment = require('moment-timezone');

// Date Utils

export function eventDateSort(ed1: EventDateResource, ed2: EventDateResource): number {
  // Usage: let sorted = event_resource.event_dates.sort(sort_eventdates_by_start)
  if (ed1.start === ed2.start) return 0;
  if (ed1.start > ed2.start) return -1;
  return 1;
}

/** Given an event resource, attempt to find the best event date based on filter
 *
 *
 */
export function getBestEventDate(
  eventDates: EventDateResource[],
  starting_date_filter: moment.Moment,
  type_filter = null
): EventDateResource | null {
  let target_event_date = null;
  //var now = get_runtime_constants().today_end_date_utc;
  //var start_today = get_runtime_constants().today_start_date_utc;

  // This check is mostly for broken data
  if (!eventDates) {
    return null;
  }

  let sorted_event_dates = eventDates.sort(eventDateSort);
  let startDateFilterMoment = starting_date_filter;

  // If there is an event date type filter, find the first occurence of the match, and in the case of the 'timed' events, the first that hasn't started yet
  if (type_filter) {
    for (let i in sorted_event_dates) {
      if (sorted_event_dates[i].type == type_filter) {
        if (
          (type_filter == 'timed' && moment(new Date(sorted_event_dates[i].start)) > startDateFilterMoment) ||
          type_filter != 'timed'
        ) {
          target_event_date = sorted_event_dates[i];
          break;
        }
      }
    }
  } else {
    // No targeted date type so lets find the soonest one that hasn't happened yet
  }

  // Worst case scenerio, go with the first
  if (!target_event_date) {
    target_event_date = sorted_event_dates[0];
  }
  return target_event_date;
}
