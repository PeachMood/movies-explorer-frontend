import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PROFILE_SUCCESS } from '@utils/constants';
import { Header } from '@components/layout/Header/Header';
import { useAuthContext } from '@hooks/useAuthContext';
import { usePopupContext } from '@hooks/usePopupContext';
import { UserApi } from '@utils/api/UserApi';
import { AuthApi } from '@utils/api/AuthApi';

import { ProfileForm } from './ProfileForm/ProfileForm';
import './ProfilePage.css';

export const ProfilePage = () => {
  const { currentUser, setCurrentUser, setIsLoggedIn } = useAuthContext();
  const { setSuccess, setError } = usePopupContext();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = ({ name, email }) => {
    const api = new UserApi();
    setIsLoading(true);
    api.updateCurrentUser({ name, email })
      .then(user => {
        setCurrentUser(user);
        setIsEditing(false);
        setSuccess(PROFILE_SUCCESS);
        setMessage(null);
      })
      .catch(error => setMessage(error))
      .finally(() => setIsLoading(false));
  };

  const handleLogout = () => {
    const api = new AuthApi();
    api.logout()
      .then(() => {
        localStorage.clear();
        setCurrentUser(null);
        setIsLoggedIn(false);
        navigate('/', { replace: true });
      })
      .catch(error => setError(error));
  };

  return (
    <div className="profile">
      <Header />
      <main className="profile__content">
        <ProfileForm
          user={currentUser}
          error={message}
          isEditing={isEditing}
          isLoading={isLoading}
          onSubmit={handleSubmit}
          onLogout={handleLogout}
          onEdit={handleEdit} />
      </main>
    </div>
  );
};
