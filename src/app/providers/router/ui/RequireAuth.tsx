import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserAuthData } from '@/entities/User';

import { RoutesPath } from '@/shared/const/router';

export const RequireAuth = ({ children }: {children: JSX.Element}) => {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={RoutesPath.main} state={{ from: location }} replace />;
  }

  return children;
};
