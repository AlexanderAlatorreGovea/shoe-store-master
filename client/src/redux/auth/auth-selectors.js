import { createSelector } from 'reselect';

const checkAuthenticatation = state => state.auth;

export const authenticated = createSelector(
  [checkAuthenticatation],
  auth => [auth].map(item => item.isAuthenticated)
);  
