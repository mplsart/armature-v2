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
export interface ArticleResource extends Resource {
    title: string;
    slug: string;
    summary: string;
    primary_image_resource: ImageResource;
    author_name: string;
}
interface ListItemArticleProps extends CardListItemBaseProps {
    resource: ArticleResource;
}
declare const CardListItemArticle: React.FC<ListItemArticleProps>;
export default CardListItemArticle;
