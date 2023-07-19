import { useNavigate, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { TextButton } from '@components/buttons/TextButton/TextButton';
import { Button } from '@components/buttons/Button/Button';
import { IconButton } from '@components/buttons/IconButton/IconButton';
import { List } from '@components/utils/List/List';
import { useAuthContext } from '@hooks/useAuthContext';
import profile from '@assets/images/profile.svg';

import './Navigation.css';

export const Navigation = ({ className }) => {
  const { isLoggedIn } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const classes = classNames('navigation', className);
  const listClasses = {
    list: classNames('navigation__list', `navigation__list_access_${isLoggedIn ? 'private' : 'public'}`),
    item: classNames(isLoggedIn && 'navigation__item'),
  };

  const isCurrentPathname = (pathname) => {
    return location.pathname === pathname;
  };

  const handleMoviesClick = () => {
    navigate('/movies');
  };

  const handleSavedMoviesClick = () => {
    navigate('/saved-movies');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleRegisterClick = () => {
    navigate('/signup');
  };

  const handleLoginClick = () => {
    navigate('/signin');
  };

  return (
    <nav className={classes}>
      {isLoggedIn ? (
        <List className={listClasses}>
          <TextButton
            text="Фильмы"
            isBold={isCurrentPathname('/movies')}
            onClick={handleMoviesClick} />
          <TextButton
            text="Сохранённые фильмы"
            isBold={isCurrentPathname('/saved-movies')}
            onClick={handleSavedMoviesClick} />
          <IconButton text="Аккаунт" icon={profile} onClick={handleProfileClick} />
        </List >
      ) : (
        <List className={listClasses}>
          <TextButton text="Регистрация" size="small" onClick={handleRegisterClick} />
          <Button text="Войти" size="small" color="accent" onClick={handleLoginClick} />
        </List >
      )}
    </nav>
  );
};
