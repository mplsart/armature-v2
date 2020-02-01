import React, { ElementType, ReactNode } from 'react';
import { TypographyProps } from '@material-ui/core/Typography';
interface ContentSubTitleProps extends TypographyProps {
    component?: ElementType;
    children: ReactNode;
    rel?: string;
}
declare const _default: React.NamedExoticComponent<ContentSubTitleProps>;
export default _default;
