import { EventDateResource } from '../ui/cards/marquee/MarqueeCardSmallEvent';
import moment = require('moment-timezone');
export declare function eventDateSort(ed1: EventDateResource, ed2: EventDateResource): number;
/** Given an event resource, attempt to find the best event date based on filter
 *
 *
 */
export declare function getBestEventDate(eventDates: EventDateResource[], starting_date_filter: moment.Moment, type_filter?: null): EventDateResource | null;
