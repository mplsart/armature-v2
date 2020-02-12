import React from 'react';
export interface AdvertResource {
    image_resource: {
        versions: {
            MOBILE: {
                height: number;
                width: number;
                url: string;
            };
            DEFAULT: {
                height: number;
                width: number;
                url: string;
            };
        };
    };
    advert_type_label?: string;
}
export interface MegaBannerAdProps {
    width: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    resource?: AdvertResource;
    linkClassProps: object;
    linkClass: React.ElementType;
}
declare const MegaBannerAd: React.FC<MegaBannerAdProps>;
export default MegaBannerAd;
