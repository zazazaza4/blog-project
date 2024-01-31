import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserRoles, UserRole } from '@/entities/User';

import { getRouteForbidden } from '@/shared/const/router';

interface RequireRolesProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export const RequireRoles = ({ children, roles }: RequireRolesProps) => {
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);

  const hasRequireRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((requireRole) => {
      const hasRole = userRoles.includes(requireRole);
      return hasRole;
    });
  }, [roles, userRoles]);

  if (!hasRequireRoles) {
    return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />;
  }

  return children;
};
