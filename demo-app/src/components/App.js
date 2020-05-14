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
import { ColorToolPage } from './pages/ColorToolPage';

const colorList = [
  { id: 1, name: 'red', hexcode: '#FF0000' },
  { id: 2, name: 'green', hexcode: '#00FF00' },
  { id: 3, name: 'blue', hexcode: '#0000FF' },
];

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
            <Route path="/color-tool">
              <ColorToolPage colors={colorList} />
              <ColorToolPage colors={colorList} />
            </Route>
          </Switch>
        </Content>
        <Switch>
          <Route path="/about">
            <Sidebar className="about-page" />
          </Route>
          <Route path="/">
            <Sidebar className="home-page" />
          </Route>
        </Switch>
        <PageFooter />
      </PageLayout>
  );
};