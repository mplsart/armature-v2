import React from 'react';
import { ButtonProps } from '@material-ui/core/Button';
interface ResponsiveLinkButtonProps extends ButtonProps {
    component?: React.ElementType;
    target?: string;
    rel?: string;
}
declare const _default: React.NamedExoticComponent<ResponsiveLinkButtonProps>;
export default _default;
