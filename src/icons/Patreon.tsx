// Patreon icon from: https://www.patreon.com/brand
import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const Patreon: React.FC<SvgIconProps> = props => {
  return (
    <SvgIcon viewBox="0 0 100 96" {...props}>
      <path d="M64.1102,0.1004 C44.259,0.1004 28.1086,16.2486 28.1086,36.0986 C28.1086,55.8884 44.259,71.989 64.1102,71.989 C83.9,71.989 100,55.8884 100,36.0986 C100,16.2486 83.9,0.1004 64.1102,0.1004" />
      <polygon points=".012 95.988 17.59 95.988 17.59 .1 .012 .1" />
    </SvgIcon>
  );
};
export default Patreon;
