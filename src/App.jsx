import { Routes, Route } from 'react-router-dom';

import { SidebarProvider } from '@context/SidebarContext';
import { AuthProvider } from '@context/AuthContext';

import { MainPage } from '@pages/MainPage/MainPage';
import { RegisterPage } from '@pages/RegisterPage/RegisterPage';
import { LoginPage } from '@pages/LoginPage/LoginPage';
import { MoviesPage } from '@pages/MoviesPage/MoviesPage';
import { SavedMoviesPage } from '@pages/SavedMoviesPage/SavedMoviesPage';
import { ProfilePage } from '@pages/ProfilePage/ProfilePage';
import { NotFoundPage } from '@pages/NotFoundPage/NotFoundPage';

import '@assets/fonts/fonts.css';
import '@assets/styles/normalize.css';

export function App() {
  return (
    <AuthProvider>
      <SidebarProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/saved-movies" element={<SavedMoviesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SidebarProvider>
    </AuthProvider>
  );
}
