import React from 'react';
import CardListItemBase, { CardListItemBaseProps } from './CardListItemBase';

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
    FULL?: ImageVersion | string;
    SIZED?: ImageVersion | string;
    CARD_PROGRESSIVE?: ImageVersion;
  };
}

// export interface VenueResource extends Resource {
//   title: string;
//   slug: string;
//   summary: string;
//   primary_image_resource: ImageResource;
//   author_name: string;
// }

export interface VenueResource {
  name: string;
  slug: string;
  nickname: string;
  summary: string;
  category: string;
  is_premium_profile: boolean;
  is_online_only: boolean;

  address: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  geo: { lat: number; lon: number }[];
  multiple_locations_label: string;
  hours?: any;

  primary_image_resource_id: string;
  primary_image_resource: ImageResource;
}

interface ListItemVenueProps extends CardListItemBaseProps {
  resource: VenueResource;
  formattedAddress: string;
}

const CardListItemVenue: React.FC<ListItemVenueProps> = (props) => {
  let { resource, formattedAddress, ...rest } = props;

  // Image
  let imageUrl;
  let imageAltText = resource.name;
  if (
    resource.is_premium_profile &&
    resource.primary_image_resource &&
    resource.primary_image_resource.versions &&
    resource.primary_image_resource.versions.THUMB
  ) {
    imageUrl = resource.primary_image_resource.versions.THUMB.url;
  }

  //let formattedAddress = resource.address;
  return (
    <CardListItemBase
      primaryText={resource.name}
      secondaryText={formattedAddress}
      underlineText={resource.summary}
      divider
      dense
      //overlineText={overlineText}
      imageUrl={imageUrl}
      imageAltText={imageAltText}
      {...rest}
    />
  );
};

export default CardListItemVenue;
