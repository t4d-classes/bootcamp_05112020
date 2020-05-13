import React from 'react';

import './HomePage.css';

export const HomePage = () => {

  return (
    <>
      <main id="content" className="home-page">
        <header>
          <h2>Home</h2>
        </header>

        <section>
          <p>Welcome Home!</p>
        </section>
      </main>

      <aside id="sidebar" className="home-page"></aside>
    </>
  );

};