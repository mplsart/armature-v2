import React from 'react';
import { ButtonProps } from '@material-ui/core/Button';
interface PrimaryButtonProps extends ButtonProps {
    component?: React.ElementType;
    target?: string;
    rel?: string;
}
declare const _default: React.NamedExoticComponent<PrimaryButtonProps>;
export default _default;
