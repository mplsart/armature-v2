import React from 'react';
import CardListItemBase, { CardListItemBaseProps } from './CardListItemBase';
import moment from 'moment';

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

//export default function CardListItemEventDate({ resource, divider, ...rest }) {
interface ListItemArticleProps extends CardListItemBaseProps {
  resource: EventDateResource;
}

const CardListItemEventDate: React.FC<ListItemArticleProps> = props => {
  let { resource, ...rest } = props;

  let target_event_date = resource;
  let event_resource = resource.event_resource;

  // Image
  let imageUrl;
  let imageAltText = event_resource.name;
  if (
    event_resource.primary_image_resource &&
    event_resource.primary_image_resource.versions &&
    event_resource.primary_image_resource.versions.THUMB
  ) {
    imageUrl = event_resource.primary_image_resource.versions.THUMB.url;
  }

  let byLineText = '';
  let edLabel = '';
  // If it is ongoing - worst case scenario
  if (target_event_date.category == 'ongoing') {
    byLineText =
      moment(new Date(target_event_date.start)).format('MMM D') +
      ' - ' +
      moment(new Date(target_event_date.end)).format('MMM D');
  } else {
    // Else show the end
    byLineText = moment(new Date(target_event_date.start)).format('ddd MMM D');
    edLabel = target_event_date.label;
  }

  let overlineText = '';

  let venue_resource = resource.venue_resource;
  let venue_name = venue_resource.nickname || venue_resource.name;
  if (venue_resource.multiple_locations_label) {
    venue_name = venue_resource.multiple_locations_label;
  }

  // Overline
  overlineText = edLabel + ' @ ' + venue_name;

  return (
    <CardListItemBase
      //button
      primaryText={event_resource.name}
      secondaryText={overlineText}
      //underlineText={overlineText}
      overlineText={byLineText}
      imageUrl={imageUrl}
      imageAltText={imageAltText}
      {...rest}
    />
  );
};

export default CardListItemEventDate;
