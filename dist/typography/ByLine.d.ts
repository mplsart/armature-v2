import React, { ElementType, ReactNode } from 'react';
import { TypographyProps } from '@material-ui/core/Typography';
interface ByLineProps extends TypographyProps {
    component?: ElementType;
    children: ReactNode;
    rel?: string;
}
declare const _default: React.NamedExoticComponent<ByLineProps>;
export default _default;
