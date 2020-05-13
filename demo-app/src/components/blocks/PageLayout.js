import React from 'react';

import './PageLayout.css';

export const PageLayout = (props) => {

  return (
    <div className="page-layout">
      {props.children}
    </div>
  );
};