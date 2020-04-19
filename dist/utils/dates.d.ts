import { EventDateResource } from '../ui/cards/marquee/MarqueeCardSmallEvent';
import moment, { Moment } from 'moment-timezone';
/**
 * Threshold for max number of ours to between the start and end date before we
 * consider it multi day. I.e. An even can 8PM-2AM but we wouldn't consider it "multiday" simply because it goes past midnight
 */
export declare const MULITIDAY_HOURS_THRESHOLD = 15;
/**
 * Sort helper for event date objects. The largest dates will be returned first.
 * Usage with eventResource.event_dates.sort(eventDateSort)
 * @param ed1 Event Date 1
 * @param ed2 Event Date 1
 */
export declare function eventDateSort(ed1: Partial<EventDateResource>, ed2: Partial<EventDateResource>): number;
/** Given an event resource, attempt to find the best event date based on filter
 */
export declare function getBestEventDate(eventDates: EventDateResource[], starting_date_filter: moment.Moment, type_filter?: null): EventDateResource | null;
/**
 * Helper function to return an the optimal brief display string
 * @param startMoment Event Start Date
 * @param endMoment Event End Date
 * @param nowMoment Current date, useful for mocking
 */
export declare function getShortDateString(startMoment: Moment, endMoment: Moment, nowMoment: Moment): string;
