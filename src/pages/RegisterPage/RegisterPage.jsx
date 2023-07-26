import { Auth } from '@components/layout/Auth/Auth';
import { Form } from '@components/forms/Form/Form';
import { Input } from '@components/inputs/Input/Input';

export const RegisterPage = () => {
  const config = {
    title: 'Добро пожаловать!',
    button: 'Зарегистрироваться',
    navigation: 'Уже зарегистрированы?',
    textButton: 'Войти',
    link: '/signin',
  };

  return (
    <main>
      <Auth>
        <Form config={config} noValidate>
          <fieldset className="auth__content auth__content_type_register">
            <Input
              label="Имя"
              autoComplete="name"
              type="text"
              placeholder="Укажите имя"
              minLength={2}
              maxLength={30}
              pattern="[a-zа-яё]+[a-zа-яё\s\-]*/i"
              required />
            <Input
              label="E-mail"
              autoComplete="email"
              type="email"
              placeholder="Укажите электронную почту"
              required />
            <Input
              label="Пароль"
              autoComplete="new-password"
              type="password"
              placeholder="Придумайте пароль"
              minLength={6}
              maxLength={20}
              required />
          </fieldset>
        </Form>
      </Auth>
    </main>
  );
};
