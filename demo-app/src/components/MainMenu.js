import React from 'react';
import { Link } from 'react-router-dom';

import './MainMenu.css';  

export const MainMenu = () => {

  // ui model data
  const menuItems = [
    { id: 1, url: '/', caption: 'Home' },
    { id: 2, url: '/about', caption: 'About' },
    { id: 3, url: '/color-tool', caption: 'Color Tool' },
    { id: 4, url: '/car-tool', caption: 'Car Tool' },
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