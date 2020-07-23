// Facebook icon from: https://iconmonstr.com/facebook-1-svg/
import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const Facebook: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    </SvgIcon>
  );
};

export default Facebook;
