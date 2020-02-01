import React from 'react';
import { GridProps as MuiGridProps } from '@material-ui/core/Grid';
interface GridProps extends MuiGridProps {
    fluid?: boolean;
    align?: 'left' | 'center' | 'right';
}
declare const Grid: React.FunctionComponent<GridProps>;
declare type RowProps = MuiGridProps;
declare const Row: React.FunctionComponent<RowProps>;
declare type ColProps = MuiGridProps;
declare const Col: React.FunctionComponent<ColProps>;
export { Grid, Row, Col };
