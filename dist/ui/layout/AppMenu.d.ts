import React from 'react';
interface SlideMenuProps {
    menuActive: boolean;
    menuToggle: (force?: boolean) => void;
    children: React.ReactNode;
}
declare const SlideMenu: React.FC<SlideMenuProps>;
export default SlideMenu;
