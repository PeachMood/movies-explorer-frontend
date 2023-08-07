import { PROFILE_VALIDATION } from '@utils/constants';
import { TextField } from '@components/inputs/TextField/TextField';
import { Button } from '@components/buttons/Button/Button';
import { TextButton } from '@components/buttons/TextButton/TextButton';
import { Error } from '@components/utils/Error/Error';
import { useForm } from '@hooks/useForm';

import './ProfileForm.css';

export const ProfileForm = ({ user, error, isEditing, isLoading, onSubmit, onLogout, onEdit }) => {
  const { handleChange, handleSubmit, isValid, values, errors } = useForm({ defaultValues: user, options: PROFILE_VALIDATION });
  const isDisabled = !isValid || isLoading || JSON.stringify(user) === JSON.stringify(values);

  return (
    <section className="profile-form">
      <form className="profile-form__form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1 className="profile-form__title">{`Привет, ${user.name}!`}</h1>
        <fieldset className="profile-form__inputs" disabled={isLoading}>
          <TextField
            content="top"
            name="name" autoComplete="name"
            label="Имя" placeholder="Укажите имя"
            disabled={!isEditing}
            minLength={2} maxLength={30}
            required pattern="^[aА-яЯaA-zZёЁ]+(?:[ \-][aА-яЯaA-zZёЁ]+)*"
            value={values.name || ''}
            error={errors.name}
            onChange={handleChange} />
          <TextField
            content="bottom"
            name="email" autoComplete="email"
            label="E-mail" placeholder="Укажите email"
            disabled={!isEditing}
            required pattern="[aA-zZ0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            value={values.email || ''}
            error={errors.email}
            onChange={handleChange} />
        </fieldset>
        {isEditing ? (
          <div className="profile-form__button">
            <Error text={error} />
            <Button text="Сохранить" color="accent" type="submit" disabled={isDisabled} />
          </div>
        ) : (
          <div className="profile-form__buttons">
            <TextButton text="Редактировать" type="button" onClick={onEdit} />
            <TextButton text="Выйти из аккаунта" color="warning" type="button" onClick={onLogout} />
          </div>
        )}
      </form>
    </section>
  );
};
