import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuthContext } from '@hooks/useAuthContext';

export const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useAuthContext();

  if (isLoggedIn) {
    return <Navigate to="/movies" replace />;
  }

  return (
    <>
      {children}
      <Outlet />
    </>
  );
};
