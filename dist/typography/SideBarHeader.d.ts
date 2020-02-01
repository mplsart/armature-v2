import React, { ElementType, ReactNode } from 'react';
import { TypographyProps } from '@material-ui/core/Typography';
interface SideBarHeaderProps extends TypographyProps {
    component?: ElementType;
    children: ReactNode;
    rel?: string;
}
declare const _default: React.NamedExoticComponent<SideBarHeaderProps>;
export default _default;
