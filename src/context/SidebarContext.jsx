import { createContext, useState } from 'react';

export const SidebarContext = createContext(null);

export const SidebarProvider = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpened, setIsOpened }}>
      {children}
    </SidebarContext.Provider>
  );
};
