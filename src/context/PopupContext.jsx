import { createContext, useState } from 'react';

export const PopupContext = createContext(null);

export const PopupProvider = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [message, setMessage] = useState(null);

  const setSuccess = (text) => {
    setMessage({ type: 'success', text });
    setIsOpened(true);
  };

  const setError = (text) => {
    setMessage({ type: 'error', text });
    setIsOpened(true);
  };

  const close = () => {
    setIsOpened(false);
  }

  return (
    <PopupContext.Provider value={{ message, isOpened, setSuccess, setError, close }}>
      {children}
    </PopupContext.Provider>
  );
};
