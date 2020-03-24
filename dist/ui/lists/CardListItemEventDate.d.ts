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
    canceled?: boolean;
    type: string;
    end: string;
    start: string;
    event_resource: EventResource;
    venue_resource: {
        name: string;
        nickname?: string | null;
        multiple_locations_label?: string;
    };
}
interface ListItemArticleProps extends CardListItemBaseProps {
    resource: EventDateResource;
}
declare const CardListItemEventDate: React.FC<ListItemArticleProps>;
export default CardListItemEventDate;
