import React from 'react';
interface AppBarProps {
    fluid: boolean;
    menuActive: boolean;
    menuToggle: (force?: boolean) => void;
    titleComponents: React.ReactNode;
    rightComponents?: React.ReactNode;
}
declare const AppBar: React.FC<AppBarProps>;
export default AppBar;
