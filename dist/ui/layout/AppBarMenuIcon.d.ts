import React from 'react';
export interface AppBarMenuIconProps {
    active: boolean;
    handleMenuToggle: (force?: boolean) => void;
}
declare const AppBarMenuIcon: React.FunctionComponent<AppBarMenuIconProps>;
export default AppBarMenuIcon;
