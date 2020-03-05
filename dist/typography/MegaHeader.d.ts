import React, { ElementType, ReactNode } from 'react';
import { TypographyProps } from '@material-ui/core/Typography';
interface ContentTitleProps extends TypographyProps {
    component?: ElementType;
    children: ReactNode;
    rel?: string;
}
declare const _default: React.NamedExoticComponent<ContentTitleProps>;
export default _default;
