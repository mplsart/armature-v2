// Base Wrapper for Pages
// This might be slightly overkill, but gives us an edge for loading states

import React from 'react';

const PageBase: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default PageBase;
