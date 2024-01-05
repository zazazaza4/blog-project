import { Suspense, useState } from 'react';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { classNames } from 'shared/lib/classNames/classNames';

import { AppRouter } from './providers/router';

const App = () => (
  <div className={classNames('app', {}, [])}>
    <Suspense fallback="">
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </Suspense>
  </div>
);
export default App;
