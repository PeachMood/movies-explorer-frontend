import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { REGISTER_FORM, REGISTER_VALIDATION } from '@utils/constants';
import { Auth } from '@components/layout/Auth/Auth';
import { Form } from '@components/forms/Form/Form';
import { Input } from '@components/inputs/Input/Input';
import { useAuthContext } from '@hooks/useAuthContext';
import { useForm } from '@hooks/useForm';
import { AuthApi } from '@utils/api/AuthApi.js';

export const RegisterPage = () => {
  const { setIsLoggedIn } = useAuthContext();
  const { handleChange, handleSubmit, isValid, values, errors } = useForm({ options: REGISTER_VALIDATION });
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

  const handleRegister = (user) => {
    const { email, password } = user;
    const api = new AuthApi();
    setIsLoading(true);
    api.register(user)
      .then(() => handleLogin({ email, password }))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <main>
      <Auth>
        <Form form={REGISTER_FORM} error={error} isDisabled={!isValid || isLoading} onSubmit={handleSubmit(handleRegister)}>
          <fieldset className="auth__content auth__content_type_register" disabled={isLoading}>
            <Input
              className="auth__input"
              name="name"
              label="Имя"
              autoComplete="name"
              type="text"
              placeholder="Укажите имя"
              minLength={2}
              maxLength={30}
              pattern="^[aА-яЯaA-zZёЁ]+(?:[ \-][aА-яЯaA-zZёЁ]+)*"
              required
              value={values?.name || ''}
              error={errors.name}
              onChange={handleChange} />
            <Input
              className="auth__input"
              name="email"
              label="E-mail"
              autoComplete="email"
              type="email"
              placeholder="Укажите электронную почту"
              required
              value={values?.email || ''}
              error={errors.email}
              onChange={handleChange} />
            <Input
              className="auth__input"
              name="password"
              label="Пароль"
              autoComplete="new-password"
              type="password"
              placeholder="Придумайте пароль"
              minLength={6}
              maxLength={20}
              required
              value={values?.password || ''}
              error={errors.password}
              onChange={handleChange} />
          </fieldset>
        </Form>
      </Auth>
    </main>
  );
};
