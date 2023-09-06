import { createContext, useEffect, useState } from 'react';

import { AuthApi } from '@utils/api/AuthApi';
import { UserApi } from '@utils/api/UserApi';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
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
    if (isLoggedIn) {
      const api = new UserApi();
      api.getCurrentUser()
        .then(user => setCurrentUser(user))
        .catch(error => alert(error));
    }
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
