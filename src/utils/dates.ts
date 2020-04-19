// Simple Date Utilities
import { EventDateResource } from '../ui/cards/marquee/MarqueeCardSmallEvent';
import moment, { Moment } from 'moment-timezone';

/**
 * Threshold for max number of ours to between the start and end date before we
 * consider it multi day. I.e. An even can 8PM-2AM but we wouldn't consider it "multiday" simply because it goes past midnight
 */
export const MULITIDAY_HOURS_THRESHOLD = 15;

/**
 * Sort helper for event date objects. The largest dates will be returned first.
 * Usage with eventResource.event_dates.sort(eventDateSort)
 * @param ed1 Event Date 1
 * @param ed2 Event Date 1
 */
export function eventDateSort(ed1: Partial<EventDateResource>, ed2: Partial<EventDateResource>): number {
  if (!ed1.start) return 0; // For Typescript to be happy...
  if (!ed2.start) return 0; // For Typescript to be happy...
  if (ed1.start < ed2.start) return 1;
  if (ed1.start > ed2.start) return -1;
  return 0; // They're the same.
}

/** Given an event resource, attempt to find the best event date based on filter
 */
// TODO: This needs tests
export function getBestEventDate(
  eventDates: EventDateResource[],
  starting_date_filter: moment.Moment,
  type_filter = null
): EventDateResource | null {
  let target_event_date = null;

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

/**
 * Helper function to return an the optimal brief display string
 * @param startMoment Event Start Date
 * @param endMoment Event End Date
 * @param nowMoment Current date, useful for mocking
 */
export function getShortDateString(startMoment: Moment, endMoment: Moment, nowMoment: Moment): string {
  const durationHours = endMoment.diff(startMoment, 'hours');

  // If it is ongoing - worst case scenario
  if (durationHours < MULITIDAY_HOURS_THRESHOLD) {
    // Case: Single Day Event
    return startMoment.format('ddd MMM D');
  } else if (startMoment < nowMoment && endMoment.endOf('day') >= nowMoment) {
    // Case: Multi day and already started but hasn't ended yet (by end of day)
    return `Now - ${endMoment.format('MMM D')}`;
  } else if (startMoment.isSame(endMoment, 'month')) {
    // Case Multiday - start and end are the same month
    return `${startMoment.format('MMM D')} - ${endMoment.format('D')}`;
  } else {
    // Case: Multi day and not started yet - different months
    return `${startMoment.format('MMM D')} - ${endMoment.format('MMM D')}`;
  }
}
