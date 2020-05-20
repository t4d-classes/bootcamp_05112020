import React from 'react';
import { Link } from 'react-router-dom';

import './MainMenu.css';  

export const MainMenu = () => {

  // ui model data
  const menuItems = [
    { id: 1, url: '/', caption: 'Home' },
    { id: 2, url: '/about', caption: 'About' },
    { id: 3, url: '/color-tool', caption: 'Color Tool' },
    { id: 4, url: '/car-tool-thunk', caption: 'Car Tool Thunk' },
    { id: 5, url: '/car-tool-saga', caption: 'Car Tool Saga' },
    { id: 6, url: '/car-tool-observable', caption: 'Car Tool Observable' },
    { id: 7, url: '/calc-tool', caption: 'Calc Tool' },
  ];

  return (
    <nav id="main-menu">
      <ul>
        {menuItems.map(menuItem => <li key={menuItem.id}>
          <Link to={menuItem.url}>{menuItem.caption}</Link>
        </li>)}
      </ul>
    </nav>
  );

};