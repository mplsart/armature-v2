import React from 'react';
export interface CardListItemBaseProps {
    imageFloat: 'left' | 'right';
    highlightPrimary: boolean;
    imageUrl?: string;
    primaryText?: string;
    imageAltText?: string;
    secondaryText?: string;
    overlineText?: string;
    underlineText?: string;
    linkClassProps: object;
    component: React.ElementType;
    divider?: boolean;
    dense?: boolean;
    actionButtonProps?: object;
    deemphasize?: boolean;
}
declare const CardListItemBase: React.FC<CardListItemBaseProps>;
export default CardListItemBase;
