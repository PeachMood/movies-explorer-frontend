import { Routes, Route } from 'react-router-dom';

import { PublicRoute } from '@routes/PublicRoute';
import { PrivateRoute } from '@routes/PrivateRoute';

import { MainPage } from '@pages/MainPage/MainPage';
import { RegisterPage } from '@pages/RegisterPage/RegisterPage';
import { LoginPage } from '@pages/LoginPage/LoginPage';
import { MoviesPage } from '@pages/MoviesPage/MoviesPage';
import { SavedMoviesPage } from '@pages/SavedMoviesPage/SavedMoviesPage';
import { ProfilePage } from '@pages/ProfilePage/ProfilePage';
import { NotFoundPage } from '@pages/NotFoundPage/NotFoundPage';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route element={<PublicRoute />}>
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/saved-movies" element={<SavedMoviesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
