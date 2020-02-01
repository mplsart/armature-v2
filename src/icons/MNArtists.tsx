// Custom Icon for mnartists.org
import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const MNArtists: React.FunctionComponent<SvgIconProps> = props => {
  return (
    <SvgIcon viewBox="0 0 20.04 12.67" {...props}>
      <polygon
        className="cls-1"
        points="20.04 4.74 20.01 4.7 20.01 4.66 7.94 5.72 4.79 0 4.75 0.02 4.71 0.01 0 12.62 0.04 12.63 0.04 12.67 9.51 12.11 9.51 12.07 9.53 12.1 20.04 4.74"
      />
    </SvgIcon>
  );
};

export default MNArtists;
