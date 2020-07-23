// Marquee Event Card
import React from 'react';
import moment, { Moment } from 'moment-timezone';
import MarqueeCardBase from './MarqueeCardBase';
import CalendarIcon from '../../../icons/Calendar';
import { getBestEventDate, getShortDateString } from '../../../utils/dates';

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
  host_slug?: string;
  host_resource?: {
    name: string;
    nickname?: string | null;
    multiple_locations_label?: string;
  };
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

const MarqueeCardEvent: React.FC<MarqueeCardEventProps> = (props) => {
  const { resource, startingDateFilter, ...rest } = props;

  // Isolate Event Date
  let eventResource = resource;
  let targetEd = getBestEventDate(resource.event_dates, startingDateFilter);
  if (!targetEd) {
    return <></>;
  }

  // Determine date text to show
  let startMoment = moment(new Date(targetEd.start));
  let endMoment = moment(new Date(targetEd.end));
  let byLineText = getShortDateString(startMoment, endMoment, moment(new Date()));
  let overlineText = targetEd.label;

  // Venue
  let venue_resource = targetEd.venue;
  if (eventResource.host_resource) {
    venue_resource = eventResource.host_resource;
    overlineText += ' • ';
  } else {
    overlineText += ' @ ';
  }

  let venue_name;
  if (venue_resource) {
    venue_name = venue_resource.nickname || venue_resource.name;
    if (venue_resource.multiple_locations_label) {
      venue_name = venue_resource.multiple_locations_label;
    }
  }

  // Overline
  overlineText += venue_name;

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
