import React from 'react';
interface SlideMenuProps {
    menuActive: boolean;
    menuToggle: (force?: boolean) => void;
    children: React.ReactNode;
}
declare const SlideMenu: React.FunctionComponent<SlideMenuProps>;
export default SlideMenu;
