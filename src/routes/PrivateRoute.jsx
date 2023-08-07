import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuthContext } from '@hooks/useAuthContext';

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      {children}
      <Outlet />
    </>
  );
};
