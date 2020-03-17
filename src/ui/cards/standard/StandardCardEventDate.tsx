// Standard Event Date Card
import React from 'react';
import moment from 'moment-timezone';
import StandardCardBase from './StandardCardBase';
import CalendarIcon from '../../../icons/Calendar';

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
}

export interface EventDateResource extends Resource {
  label: string;
  category: string;
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

const StandardCardEventDate: React.FC<StandardCardEventDateProps> = props => {
  const { eventResource, eventDateResource, ...rest } = props;

  // Event Date
  let target_event_date = eventDateResource;
  let byLineText;

  // If it is ongoing - worst case scenario
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
  let venue_resource = target_event_date.venue_resource;
  let venue_name = venue_resource.nickname || venue_resource.name;
  if (venue_resource.multiple_locations_label) {
    venue_name = venue_resource.multiple_locations_label;
  }

  // Overline
  let overlineText = target_event_date.label + ' @ ' + venue_name;

  return (
    <StandardCardBase
      overlineText={overlineText}
      title={eventResource.name}
      byLineText={byLineText}
      byLineIcon={CalendarIcon}
      imageResource={eventResource.primary_image_resource}
      {...rest}
    />
  );
};

export default StandardCardEventDate;
