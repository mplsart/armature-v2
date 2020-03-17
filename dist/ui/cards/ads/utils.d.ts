/// <reference types="react" />
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
export interface CardAdProps {
    isMobile: boolean;
    resource?: AdvertResource;
    linkClassProps: object;
    linkClass: React.ElementType;
}
export declare function getAdImageStyles(resource: AdvertResource, isMobile: boolean): {
    [key: string]: string;
};
