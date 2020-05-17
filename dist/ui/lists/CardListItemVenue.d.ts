import React from 'react';
import { CardListItemBaseProps } from './CardListItemBase';
export interface Resource {
    resource_id: string;
    _meta: {
        is_verbose: boolean;
        resource_type: string;
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
        FULL?: ImageVersion | string;
        SIZED?: ImageVersion | string;
        CARD_PROGRESSIVE?: ImageVersion;
    };
}
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
    geo: {
        lat: number;
        lon: number;
    }[];
    multiple_locations_label: string;
    hours?: any;
    primary_image_resource_id: string;
    primary_image_resource: ImageResource;
}
interface ListItemVenueProps extends CardListItemBaseProps {
    resource: VenueResource;
    formattedAddress: string;
}
declare const CardListItemVenue: React.FC<ListItemVenueProps>;
export default CardListItemVenue;
