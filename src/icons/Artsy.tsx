// Artsy icon from: https://fontawesome.com/icons/calendar?style=light
import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const Artsy: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 600 600" {...props}>
      <path d="M71.9,571h500V71h-500V571L71.9,571z M536,535h-75.7v-98.6h-36V535H107.9V107H536V535z" />
      <path
        d="M273.5,158.7h-39.7l-73.5,189.2h38l19.8-53.1h71.2l19.6,53.1h38C347,347.9,273.5,158.7,273.5,158.7z M229.3,262.8
		l24.4-65.8l24.1,65.8H229.3L229.3,262.8z"
      />
    </SvgIcon>
  );
};
export default Artsy;
