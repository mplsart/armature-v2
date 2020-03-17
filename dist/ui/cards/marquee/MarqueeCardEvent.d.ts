import React from 'react';
import { Moment } from 'moment-timezone';
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
    type: string;
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
declare const MarqueeCardEvent: React.FC<MarqueeCardEventProps>;
export default MarqueeCardEvent;
