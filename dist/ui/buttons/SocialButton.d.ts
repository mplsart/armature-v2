import React from 'react';
import { IconButtonProps } from '@material-ui/core/IconButton';
import { SvgIconProps } from '@material-ui/core';
declare type ServicesType = 'instagram' | 'facebook' | 'twitter' | 'tumblr' | 'youtube' | 'vimeo' | 'mnartists' | 'other';
export declare const serviceIconMap: Record<ServicesType, React.ElementType<SvgIconProps>>;
interface SocialButtonProps extends IconButtonProps {
    service: ServicesType | string;
    component?: React.ElementType;
    target?: string;
    rel?: string;
    href?: string;
}
declare const _default: React.NamedExoticComponent<SocialButtonProps>;
export default _default;
