import { createContext, useEffect, useState } from 'react';

import { usePopupContext } from '@hooks/usePopupContext';
import { AuthApi } from '@utils/api/AuthApi';
import { UserApi } from '@utils/api/UserApi';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const { setError } = usePopupContext();
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const api = new AuthApi();
    api.checkToken()
      .then(user => {
        setIsLoggedIn(true);
        setCurrentUser(user);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if (isLoggedIn && !currentUser) {
      const api = new UserApi();
      api.getCurrentUser()
        .then(user => setCurrentUser(user))
        .catch(error => setError(error));
    }
  }, [isLoggedIn, currentUser, setError]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
