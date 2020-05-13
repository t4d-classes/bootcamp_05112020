import React from 'react';

export const Sidebar = (props) => {

  return (
    <aside id="sidebar" className={props.className}>
      {props.children}
    </aside>
  );


};