import React from 'react';

import './Content.css';

export const Content = (props) => {

  return (
    <main id="content" className={props.className}>
      {props.children}
    </main>
  );


};