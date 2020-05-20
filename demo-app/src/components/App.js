import React from 'react';
import { Provider } from 'react-redux';
import {
  Switch, Route,
} from 'react-router-dom';

import { colorStore } from '../stores/colorStore';
import { carStoreThunk } from '../stores/carStoreThunk';
import { carStoreSaga } from '../stores/carStoreSaga';
import { carStoreObservable } from '../stores/carStoreObservable';
import { calcStore } from '../stores/calcStore';

import { PageLayout } from './blocks/PageLayout';
import { PageHeader } from './blocks/PageHeader';
import { PageFooter } from './blocks/PageFooter';
import { MainMenu } from './blocks/MainMenu';
import { Content } from './blocks/Content';
import { Sidebar } from './blocks/Sidebar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ColorToolPageContainer } from './containers/ColorToolPageContainer';
import { CarToolThunkPageContainer } from './containers/CarToolThunkPageContainer';
import { CarToolSagaPageContainer } from './containers/CarToolSagaPageContainer';
import { CarToolObservablePageContainer } from './containers/CarToolObservablePageContainer';
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
            <Route path="/car-tool-thunk">
              <Provider store={carStoreThunk}>
                <CarToolThunkPageContainer />
              </Provider>
            </Route>
            <Route path="/car-tool-saga">
              <Provider store={carStoreSaga}>
                <CarToolSagaPageContainer />
              </Provider>
            </Route>
            <Route path="/car-tool-observable">
              <Provider store={carStoreObservable}>
                <CarToolObservablePageContainer />
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