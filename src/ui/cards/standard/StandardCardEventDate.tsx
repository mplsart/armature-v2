// Standard Event Date Card
import React from 'react';
import moment from 'moment-timezone';
import StandardCardBase from './StandardCardBase';
import CalendarIcon from '../../../icons/Calendar';
import { getShortDateString } from '../../../utils/dates';

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

export interface EventResource extends Resource {
  name: string;
  slug: string;
  summary: string;
  url: string;
  featured: boolean;
  primary_image_resource_id: string;
  primary_image_resource: ImageResource;
  host_slug?: string;
  host_resource?: {
    name: string;
    nickname?: string | null;
    multiple_locations_label?: string;
  };
}

export interface EventDateResource extends Resource {
  label: string;
  category: string;
  canceled?: boolean;
  type: string; //'timed' | 'reoccurring';
  end: string;
  start: string;
  event_resource: EventResource;
  venue_resource: {
    name: string;
    nickname?: string | null;
    multiple_locations_label?: string;
  };
}

interface StandardCardEventDateProps {
  eventResource: EventResource;
  eventDateResource: EventDateResource;
  linkClass: React.ElementType;
  linkClassProps: object;
}

const StandardCardEventDate: React.FC<StandardCardEventDateProps> = (props) => {
  const { eventResource, eventDateResource, ...rest } = props;

  // Isolate Event Date
  let targetEd = eventDateResource;
  if (!targetEd) {
    return <></>;
  }

  // Determine date text to show
  let startMoment = moment(new Date(targetEd.start));
  let endMoment = moment(new Date(targetEd.end));
  let byLineText = getShortDateString(startMoment, endMoment, moment(new Date()));
  let overlineText = targetEd.label;

  // Venue
  let venue_resource = targetEd.venue_resource;

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
    <StandardCardBase
      overlineText={overlineText}
      title={eventResource.name}
      byLineText={byLineText}
      byLineIcon={CalendarIcon}
      imageResource={eventResource.primary_image_resource}
      deemphasize={targetEd.canceled}
      {...rest}
    />
  );
};

export default StandardCardEventDate;
