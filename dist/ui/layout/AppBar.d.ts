import React from 'react';
interface AppBarProps {
    fluid: boolean;
    menuActive: boolean;
    menuToggle: (force?: boolean) => void;
    titleComponents: React.ReactNode;
}
declare const AppBar: React.FunctionComponent<AppBarProps>;
export default AppBar;
