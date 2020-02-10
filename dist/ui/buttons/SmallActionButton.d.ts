import React from 'react';
import { ButtonProps } from '@material-ui/core/Button';
interface SmallActionButtonProps extends ButtonProps {
    component?: React.ElementType;
    target?: string;
    rel?: string;
}
declare const _default: React.NamedExoticComponent<SmallActionButtonProps>;
export default _default;
