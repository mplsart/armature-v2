import React from 'react';
export interface PaddedBoxProps {
    children: React.ReactNode;
    align?: 'center' | 'right' | 'left';
}
declare const PaddedBox: React.FC<PaddedBoxProps>;
export default PaddedBox;
