import React from 'react';
import { ButtonProps } from '@material-ui/core/Button';
interface ProfileButtonProps extends ButtonProps {
    component?: React.ElementType;
    as?: any;
    target?: string;
    rel?: string;
}
declare const ProfileButton: React.FC<ProfileButtonProps>;
export default ProfileButton;
