import { Suspense, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';

import { getUserAuthData } from '@/entities/User';

import { AppRoutesProps, routeConfig } from '@/shared/config/routeConfig/routeConfig';

import { RequireAuth } from './RequireAuth';
import { RequireRoles } from './RequireRoles';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        {route.element}
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? (
          <RequireAuth>
            <RequireRoles roles={route.roles}>
              {element}
            </RequireRoles>
          </RequireAuth>
        ) : element}
      />
    );
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  );
};

export { AppRouter };
