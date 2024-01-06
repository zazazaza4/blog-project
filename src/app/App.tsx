import { Suspense, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { userActions } from 'entities/User';

import { classNames } from 'shared/lib/classNames/classNames';

import { AppRouter } from './providers/router';

const App = () => {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(userActions.initAuthData());
  }, [dispath]);

  return (
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
};
export default App;
