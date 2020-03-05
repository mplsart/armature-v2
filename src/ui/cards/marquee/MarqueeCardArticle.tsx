// Marquee Article
import React from 'react';
import MarqueeCardBase from './MarqueeCardBase';
import NewspaperIcon from '../../../icons/Newspaper';

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

interface StandardCardEventDateProps {
  resource: ArticleResource;
  linkClass: React.ElementType;
  linkClassProps: object;
}

const StandardCardEventDate: React.FunctionComponent<StandardCardEventDateProps> = props => {
  const { resource, ...rest } = props;

  return (
    <MarqueeCardBase
      overlineText={`by ${resource.author_name}`}
      title={resource.title}
      byLineText={'New Article'}
      byLineIcon={NewspaperIcon}
      imageResource={resource.primary_image_resource}
      {...rest}
    />
  );
};

/*
class MarqueeCardArticle extends React.Component {
  render() {
    const { resource, ...rest} = this.props;

    // Published Date
    let publishedDate = moment(new Date(resource.published_date)).format('MMMM Do, YYYY');

    // Author Credit
    let extraOverline = '';

    // Author resource is can be verbose only
    if (resource.author_name) {
      extraOverline = ' by ' + resource.author_name;
    }
    else if (resource.author_resource) {
      extraOverline = ' by ' + resource.author_resource.firstname + ' ' + resource.author_resource.lastname;
    }

    // Overline
    let overlineText = 'Published ' + publishedDate + extraOverline;

    return (
      <MarqueeCardBase
        overlineText={overlineText}
        title={resource.title}
        byLineText="New Article"
        byLineIcon="fa-newspaper-o"
        imageResource={resource.primary_image_resource}
        {...rest}
       />
    );
  }
}
*/

export default StandardCardEventDate;
