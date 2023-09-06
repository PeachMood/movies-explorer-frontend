import { useNavigate } from 'react-router-dom';

import { Button } from '@components/buttons/Button/Button';
import { TextButton } from '@components/buttons/TextButton/TextButton';
import { Logo } from '@components/utils/Logo/Logo';
import { Error } from '@components/utils/Error/Error';

import './Form.css';

export const Form = ({ form, error, isDisabled, children, onSubmit }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(form.link);
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <Logo className="form__logo" />
      <h1 className="form__title">{form.title}</h1>
      {children}
      <Error className="form__error" text={error} />
      <Button className="form__button" text={form.button} color="accent" type="submit" disabled={isDisabled} />
      <div className="form__navigation">
        {form.navigation}
        <TextButton className="form__text-button" text={form.textButton} color="accent" type="button" onClick={handleClick} />
      </div>
    </form>
  );
};
