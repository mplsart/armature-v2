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
        CARD_PROGRESSIVE?: ImageVersion | string;
    };
}
export interface StandardCardBaseProps {
    byLineIcon: React.ElementType;
    byLineText: string;
    title: string;
    overlineText: string;
    imageResource?: ImageResource | '';
    linkClassProps: object;
    linkClass: React.ElementType;
    deemphasize?: boolean;
}
declare const StandardCardBase: React.FC<StandardCardBaseProps>;
export default StandardCardBase;
