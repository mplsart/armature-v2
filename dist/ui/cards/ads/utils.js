"use strict";
// Advert Utilities
// TODO: This turned into a bit of a junk drawer - figure out a pattern here...
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdImageStyles = void 0;
// TODO: This is duped alllll over the place. Make uniform?
// TODO: Unit Test
function getAdImageStyles(resource, isMobile) {
    var imageResource, imageUrl, h, w;
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
    var scale_factor = Math.ceil(((100 * h) / w) * 100.0) / 100.0;
    var adImageStyles = {
        paddingTop: scale_factor + "%",
        backgroundImage: "url(\"" + imageUrl + "\")",
    };
    return adImageStyles;
}
exports.getAdImageStyles = getAdImageStyles;
