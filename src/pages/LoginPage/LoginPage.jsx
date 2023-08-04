import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LOGIN_FORM, LOGIN_VALIDATION } from '@utils/constants';
import { Auth } from '@components/layout/Auth/Auth';
import { Form } from '@components/forms/Form/Form';
import { Input } from '@components/inputs/Input/Input';
import { useAuthContext } from '@hooks/useAuthContext';
import { useForm } from '@hooks/useForm';
import { AuthApi } from '@utils/api/AuthApi';

export const LoginPage = () => {
  const { setIsLoggedIn } = useAuthContext();
  const { handleChange, handleSubmit, values, errors, isValid } = useForm({ options: LOGIN_VALIDATION });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (user) => {
    const api = new AuthApi();
    setIsLoading(true);
    api.login(user)
      .then(() => {
        setIsLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <main>
      <Auth>
        <Form form={LOGIN_FORM} isDisabled={!isValid || isLoading} error={error} onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="auth__content auth__content_type_login" disabled={isLoading}>
            <Input
              className="auth__input"
              name="email"
              label="E-mail"
              autoComplete="email"
              type="email"
              placeholder="Укажите почту"
              required
              value={values?.email || ''}
              error={errors.email}
              onInput={handleChange} />
            <Input
              className="auth__input"
              name="password"
              label="Пароль"
              autoComplete="current-password"
              type="password"
              placeholder="Укажите пароль"
              required
              value={values?.password || ''}
              error={errors.password}
              onInput={handleChange} />
          </fieldset>
        </Form>
      </Auth>
    </main>
  );
};
