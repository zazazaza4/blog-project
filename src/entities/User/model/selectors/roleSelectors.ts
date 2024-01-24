import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';

import { UserRole } from '../consts/userConsts';

export const getUserRoles = (state: StateSchema) => state.user.authDate?.roles || [];

export const isUserAdmin = createSelector(getUserRoles, (roles: UserRole[]) => {
  return Boolean(roles?.includes(UserRole.ADMIN));
});

export const isUserUser = createSelector(getUserRoles, (roles: UserRole[]) => {
  return Boolean(roles?.includes(UserRole.USER));
});

export const isUserManager = createSelector(getUserRoles, (roles: UserRole[]) => {
  return Boolean(roles?.includes(UserRole.MANAGER));
});
