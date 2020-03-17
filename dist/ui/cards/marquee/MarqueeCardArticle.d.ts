import React from 'react';
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
export interface ArticleResource extends Resource {
    title: string;
    slug: string;
    summary: string;
    primary_image_resource: ImageResource;
    author_name: string;
    published_date: string;
}
interface StandardCardEventDateProps {
    resource: ArticleResource;
    linkClass: React.ElementType;
    linkClassProps: object;
}
declare const StandardCardEventDate: React.FC<StandardCardEventDateProps>;
export default StandardCardEventDate;
