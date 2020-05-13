import React from 'react';

import './AboutPage.css';

export const AboutPage = () => {

  return (
    <>
      <main id="content" className="about-page">
        <header>
          <h2>About</h2>
        </header>

        <section>
          <p>Our company is about making people's live better.</p>
        </section>
      </main>

      <aside id="sidebar" className="about-page"></aside>
    </>
  );

};