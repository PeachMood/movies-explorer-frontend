import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { TextField } from '@components/inputs/TextField/TextField';
import { Button } from '@components/buttons/Button/Button';
import { TextButton } from '@components/buttons/TextButton/TextButton';
import { Error } from '@components/utils/Error/Error';
import { useAuthContext } from '@hooks/useAuthContext';

import './ProfileForm.css';

export const ProfileForm = ({ user }) => {
  const { setIsLoggedIn } = useAuthContext();
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const title = `Привет, ${user.name}!`;

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (event) => {
    event.preventDefault();
    setError('При обновлении профиля произошла ошибка.');
  };

  const handleLogoutClick = () => {
    navigate('/', { replace: true });
    setIsLoggedIn(false);
  };

  return (
    <section className="profile-form">
      <form className="profile-form__form">
        <h1 className="profile-form__title">{title}</h1>
        <fieldset className="profile-form__inputs">
          <TextField
            label="Имя"
            content="top"
            placeholder="Укажите имя"
            autoComplete="name"
            disabled={!isEditing}
            defaultValue={user.name}
            minLength={2}
            maxLength={30}
            pattern="[a-zа-яё]+[a-zа-яё\s\-]*/i"
            required />
          <TextField
            label="E-mail"
            content="bottom"
            placeholder="Укажите email"
            autoComplete="email"
            disabled={!isEditing}
            defaultValue={user.email}
            type="email"
            required />
        </fieldset>
        {isEditing ? (
          <div className="profile-form__button">
            <Error text={error} />
            <Button text="Сохранить" color="accent" disabled={error} type="submit" onClick={handleSaveClick} />
          </div>
        ) : (
          <div className="profile-form__buttons">
            <TextButton text="Редактировать" type="button" onClick={handleEditClick} />
            <TextButton text="Выйти из аккаунта" color="warning" type="button" onClick={handleLogoutClick} />
          </div>
        )}
      </form>
    </section>
  );
};
