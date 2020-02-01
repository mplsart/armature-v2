import React from 'react';
export interface AppMenuItemProps extends React.HTMLProps<HTMLAnchorElement> {
    children: React.ReactNode;
    component?: any;
}
declare const AppMenuItem: React.FC<AppMenuItemProps>;
export default AppMenuItem;
