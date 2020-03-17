import React from 'react';
export interface AppBarMenuIconProps {
    active: boolean;
    handleMenuToggle: (force?: boolean) => void;
}
declare const AppBarMenuIcon: React.FC<AppBarMenuIconProps>;
export default AppBarMenuIcon;
