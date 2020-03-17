// Marquee Event Card
import React from 'react';
import moment, { Moment } from 'moment-timezone';
import MarqueeCardBase from './MarqueeCardBase';
import CalendarIcon from '../../../icons/Calendar';
import { getBestEventDate } from '../../../utils/dates';

// TODO: This sucks to duplicate... move to armature?
// TODO: Move to a centralized types
export interface Resource {
  resource_id: string;
  _meta: {
    is_verbose: boolean;
    resource_type: string; // TODO: Enum? BlogPost, User, FileContainer
  };
}
export interface ImageVersion {
  url: string;
  height: number;
  width: number;
}

export interface ImageResource extends Resource {
  versions: {
    CARD_SMALL: ImageVersion;
    THUMB: ImageVersion;
    CARD_LARGE?: ImageVersion;

    // Not in use?
    FULL?: ImageVersion;
    SIZED?: ImageVersion;
    CARD_PROGRESSIVE?: ImageVersion;
  };
}

export interface EventResourceVerbose extends Resource {
  name: string;
  slug: string;
  summary: string;
  url: string;
  featured: boolean;
  primary_image_resource_id: string;
  primary_image_resource: ImageResource;
  event_dates: EventDateResource[];
  content: string;
}

export interface EventDateResource {
  label: string;
  category: string;
  type: string; //'timed' | 'reoccurring';
  end: string;
  start: string;
  venue_slug?: string;
  venue?: {
    name: string;
    nickname?: string | null;
    multiple_locations_label?: string;
  };
}

interface MarqueeCardEventProps {
  resource: EventResourceVerbose;
  linkClass: React.ElementType;
  linkClassProps: object;
  startingDateFilter: Moment;
}

const MarqueeCardEvent: React.FC<MarqueeCardEventProps> = props => {
  const { resource, startingDateFilter, ...rest } = props;

  // Event Date
  let eventResource = resource;
  let target_event_date = getBestEventDate(resource.event_dates, startingDateFilter);

  let byLineText;

  // If it is ongoing - worst case scenario
  if (!target_event_date) {
    return <></>;
  }

  if (target_event_date.category == 'ongoing') {
    byLineText =
      moment(new Date(target_event_date.start)).format('MMM D') +
      ' - ' +
      moment(new Date(target_event_date.end)).format('MMM D');
  } else {
    // Else show the start
    byLineText = moment(new Date(target_event_date.start)).format('ddd MMM D');
  }

  // Venue

  //console.log(target_event_date);
  let venue_name;
  let venue_resource = target_event_date.venue;

  if (venue_resource) {
    venue_name = venue_resource.nickname || venue_resource.name;
    if (venue_resource.multiple_locations_label) {
      venue_name = venue_resource.multiple_locations_label;
    }
  }

  // Overline
  let overlineText = target_event_date.label + ' @ ' + venue_name;

  return (
    <MarqueeCardBase
      overlineText={overlineText}
      title={eventResource.name}
      byLineText={byLineText}
      byLineIcon={CalendarIcon}
      imageResource={eventResource.primary_image_resource}
      {...rest}
    />
  );
};

export default MarqueeCardEvent;
