import React from 'react';

import {
  Switch, Route,
} from 'react-router-dom';

import { PageLayout } from './blocks/PageLayout';
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';
import { MainMenu } from './MainMenu';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { Content } from './blocks/Content';
import { Sidebar } from './blocks/Sidebar';

export const App = () => {

  return (
      <PageLayout>
        <PageHeader />
        <MainMenu />
        <Content>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
          </Switch>
        </Content>
        <Switch>
          <Route path="/" exact>
            <Sidebar className="home-page" />
          </Route>
          <Route path="/about">
            <Sidebar className="about-page" />
          </Route>
        </Switch>
        <PageFooter />
      </PageLayout>
  );
};