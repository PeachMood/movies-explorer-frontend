import { Header } from '@components/layout/Header/Header';
import { useAuthContext } from '@hooks/useAuthContext';

import { ProfileForm } from './ProfileForm/ProfileForm';
import './ProfilePage.css';

export const ProfilePage = () => {
  const { currentUser } = useAuthContext();

  return (
    <div className="profile">
      <Header />
      <main className="profile__content">
        <ProfileForm user={currentUser} />
      </main>
    </div>
  );
};
