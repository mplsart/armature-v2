// Advert Utilities
// TODO: This turned into a bit of a junk drawer - figure out a pattern here...

export interface AdvertResource {
  image_resource: {
    versions: {
      MOBILE: { height: number; width: number; url: string };
      DEFAULT: { height: number; width: number; url: string };
    };
  };
  advert_type_label?: string;
}

export interface CardAdProps {
  isMobile: boolean;
  resource?: AdvertResource;
  linkClassProps: object;
  linkClass: React.ElementType;
}

// TODO: This is duped alllll over the place. Make uniform?
// TODO: Unit Test
export function getAdImageStyles(resource: AdvertResource, isMobile: boolean): { [key: string]: string } {
  let imageResource, imageUrl, h, w;

  // If We're on mobile and the mobile
  if (isMobile && resource.image_resource.versions.MOBILE) {
    imageResource = resource.image_resource.versions.MOBILE;
  }

  if (!imageResource) {
    imageResource = resource.image_resource.versions.DEFAULT;
  }

  h = imageResource.height;
  w = imageResource.width;
  imageUrl = imageResource.url;

  let scale_factor = Math.ceil(((100 * h) / w) * 100.0) / 100.0;
  let adImageStyles = {
    paddingTop: `${scale_factor}%`,
    backgroundImage: `url("${imageUrl}")`,
  };
  return adImageStyles;
}
