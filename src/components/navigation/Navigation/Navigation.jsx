import { useNavigate, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { TextButton } from '@components/buttons/TextButton/TextButton';
import { Button } from '@components/buttons/Button/Button';
import { AccountButton } from '@components/buttons/AccountButton/AccountButton';
import { List } from '@components/utils/List/List';
import { useAuthContext } from '@hooks/useAuthContext';

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
            type="button"
            onClick={handleMoviesClick} />
          <TextButton
            text="Сохранённые фильмы"
            isBold={isCurrentPathname('/saved-movies')}
            type="button"
            onClick={handleSavedMoviesClick} />
          <AccountButton onClick={handleProfileClick} />
        </List >
      ) : (
        <List className={listClasses}>
          <TextButton text="Регистрация" size="small" type="button" onClick={handleRegisterClick} />
          <Button text="Войти" size="small" color="accent" type="button" onClick={handleLoginClick} />
        </List >
      )}
    </nav>
  );
};
