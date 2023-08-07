

import { Router } from '@routes/Router';
import { Sidebar } from '@components/navigation/Sidebar/Sidebar';
import { Popup } from '@components/utils/Popup/Popup';
import { PopupProvider } from '@context/PopupContext';
import { SidebarProvider } from '@context/SidebarContext';
import { AuthProvider } from '@context/AuthContext';
import { SavedMoviesProvider } from '@context/SavedMoviesContext';

import '@assets/fonts/fonts.css';
import '@assets/styles/normalize.css';

export const App = () => {
  return (
    <PopupProvider >
      <AuthProvider>
        <SidebarProvider>
          <SavedMoviesProvider>
            <Router />
            <Sidebar />
            <Popup />
          </SavedMoviesProvider>
        </SidebarProvider>
      </AuthProvider>
    </PopupProvider>
  );
}
