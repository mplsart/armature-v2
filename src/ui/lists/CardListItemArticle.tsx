import React from 'react';
import CardListItemBase, { CardListItemBaseProps } from './CardListItemBase';

// TODO: This should be done in CSS
function truncate(str: string, n: number): string {
  return str.length > n ? str.substr(0, n - 2) + '...' : str;
}

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

const CardListItemArticle: React.FC<ListItemArticleProps> = (props) => {
  let { resource, ...rest } = props;

  // Image
  let imageUrl;
  let imageAltText = resource.title;
  if (
    resource.primary_image_resource &&
    resource.primary_image_resource.versions &&
    resource.primary_image_resource.versions.THUMB
  ) {
    imageUrl = resource.primary_image_resource.versions.THUMB.url;
  }

  // Author Credit
  const overlineText = 'By ' + resource.author_name;

  return (
    <CardListItemBase
      primaryText={truncate(resource.title, 45)}
      overlineText={overlineText}
      imageUrl={imageUrl}
      imageAltText={imageAltText}
      {...rest}
    />
  );
};

export default CardListItemArticle;
