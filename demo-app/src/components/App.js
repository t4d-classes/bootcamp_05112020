import React from 'react';
import { Provider } from 'react-redux';
import {
  Switch, Route,
} from 'react-router-dom';

import { colorStore } from '../stores/colorStore';
import { carStore } from '../stores/carStore';
import { calcStore } from '../stores/calcStore';

import { PageLayout } from './blocks/PageLayout';
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';
import { MainMenu } from './MainMenu';
import { Content } from './blocks/Content';
import { Sidebar } from './blocks/Sidebar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ColorToolPageContainer } from './containers/ColorToolPageContainer';
import { CarToolPageContainer } from './containers/CarToolPageContainer';
import { CalcToolPageContainer } from './containers/CalcToolPageContainer';


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
              <Provider store={colorStore}>
                <ColorToolPageContainer />
              </Provider>
            </Route>
            <Route path="/car-tool">
              <Provider store={carStore}>
                <CarToolPageContainer />
              </Provider>
            </Route>
            <Route path="/calc-tool">
              <Provider store={calcStore}>
                <CalcToolPageContainer />
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