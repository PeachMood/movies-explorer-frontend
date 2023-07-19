import { useState } from 'react';
import classNames from 'classnames';

import { TextField } from '@components/inputs/TextField/TextField';
import { Button } from '@components/buttons/Button/Button';
import { TextButton } from '@components/buttons/TextButton/TextButton';
import { Error } from '@components/utils/Error/Error';

import './ProfileForm.css';

export const ProfileForm = ({ user, className }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);

  const classes = classNames('profile-form', className);
  const title = `Привет, ${user.name}!`;

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (event) => {
    event.preventDefault();
    setError('При обновлении профиля произошла ошибка.');
  };

  return (
    <form className={classes} >
      <h1 className="profile-form__title">{title}</h1>
      <fieldset className="profile-form__inputs">
        <TextField
          label="Имя"
          placeholder="Укажите имя"
          autoComplete="name"
          content="top"
          disabled={!isEditing}
          defaultValue={user.name}
          required />
        <TextField
          label="E-mail"
          placeholder="Укажите email"
          autoComplete="email"
          content="bottom"
          disabled={!isEditing}
          defaultValue={user.email}
          required />
      </fieldset>
      {isEditing ? (
        <div className="profile-form__button">
          <Error text={error} />
          <Button text="Сохранить" type="submit" color="accent" disabled={error} onClick={handleSaveClick} />
        </div>
      ) : (
        <div className="profile-form__buttons">
          <TextButton text="Редактировать" type="button" onClick={handleEditClick} />
          <TextButton text="Выйти из аккаунта" color="warning" type="button" />
        </div>
      )}
    </form>
  );
};
