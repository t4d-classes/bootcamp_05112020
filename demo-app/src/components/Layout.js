import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route,
} from 'react-router-dom';

import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';
import { MainMenu } from './MainMenu';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';

import './Layout.css';

export const Layout = () => {

  return (
    <Router>
      <div className="page-layout">
        <PageHeader />
        <MainMenu />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
        </Switch>
        <PageFooter />
      </div>
    </Router>
  );
};