import React from 'react';

import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';

import './Layout.css';

export const Layout = () => {

  return <div className="page-layout">

    <PageHeader />

    <PageFooter />

  </div>;
};