import React from 'react';
import { Provider } from 'react-redux';
import {
  Switch, Route,
} from 'react-router-dom';

import { carStore } from '../stores/carStore';

import { PageLayout } from './blocks/PageLayout';
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';
import { MainMenu } from './MainMenu';
import { Content } from './blocks/Content';
import { Sidebar } from './blocks/Sidebar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ColorToolPage } from './pages/ColorToolPage';
import { CarToolPageContainer } from './containers/CarToolPageContainer';

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
            </Route>
            <Route path="/car-tool">
              <Provider store={carStore}>
                <CarToolPageContainer />
              </Provider>
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