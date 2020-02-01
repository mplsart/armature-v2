import React, { ElementType, ReactNode } from 'react';
import { TypographyProps } from '@material-ui/core/Typography';
interface LeadProps extends TypographyProps {
    component?: ElementType;
    children: ReactNode;
    rel?: string;
}
declare const _default: React.NamedExoticComponent<LeadProps>;
export default _default;
