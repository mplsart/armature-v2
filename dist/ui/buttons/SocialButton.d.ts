import React from 'react';
import { IconButtonProps } from '@material-ui/core/IconButton';
declare type ServicesType = 'instagram' | 'facebook' | 'twitter' | 'tumblr' | 'youtube' | 'vimeo' | 'mnartists' | 'other';
interface SocialButtonProps extends IconButtonProps {
    service: ServicesType;
    component?: React.ElementType;
    target?: string;
    rel?: string;
    href?: string;
}
declare const _default: React.NamedExoticComponent<SocialButtonProps>;
export default _default;
