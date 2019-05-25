// Base Wrapper for Pages
// This might be slightly overkill, but gives us an edge for loading states

import React from 'react';
import PropTypes from 'prop-types';

export default function PageBase({ children }) {
  return <React.Fragment>{children}</React.Fragment>;
}

PageBase.propTypes = {
  children: PropTypes.node
};
