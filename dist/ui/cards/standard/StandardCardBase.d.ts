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
        FULL?: ImageVersion;
        SIZED?: ImageVersion;
        CARD_PROGRESSIVE?: ImageVersion;
    };
}
export interface StandardCardBaseProps {
    byLineIcon: React.ElementType;
    byLineText: string;
    title: string;
    overlineText: string;
    imageResource?: ImageResource;
    linkClassProps: object;
    linkClass: React.ElementType;
}
declare const StandardCardBase: React.FunctionComponent<StandardCardBaseProps>;
export default StandardCardBase;
