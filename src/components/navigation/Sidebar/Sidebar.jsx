import { useNavigate, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { Overlay } from '@components/layout/Overlay/Overlay';
import { TextButton } from '@components/buttons/TextButton/TextButton';
import { AccountButton } from '@components/buttons/AccountButton/AccountButton';
import { List } from '@components/utils/List/List';
import { useAuthContext } from '@hooks/useAuthContext';
import { useSidebarContext } from '@hooks/useSidebarContext';

import './Sidebar.css';

export const Sidebar = ({ className }) => {
  const { isLoggedIn } = useAuthContext();
  const { isOpened } = useSidebarContext();
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarClasses = classNames('sidebar', isOpened && 'sidebar_opened');
  const listClasses = { list: 'sidebar__list', item: 'sidebar__item' };

  const isCurrentPathname = (pathname) => {
    return location.pathname === pathname;
  };

  const handleMain = () => {
    navigate('/');
  };

  const handleMovies = () => {
    navigate('/movies');
  };

  const handleSavedMovies = () => {
    navigate('/saved-movies');
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <Overlay className={className} isVisiable={isOpened} content="right">
      <aside className={sidebarClasses}>
        <nav className="sidebar__navigation">
          <List className={listClasses}>
            <TextButton
              text="Главная"
              size="huge"
              isBold={true}
              isUnderlined={isCurrentPathname('/')}
              type="button"
              onClick={handleMain} />
            <TextButton
              text="Фильмы"
              size="huge"
              isBold={true}
              isUnderlined={isCurrentPathname('/movies')}
              type="button"
              onClick={handleMovies} />
            <TextButton
              text="Сохранённые фильмы"
              size="huge" isBold={true}
              isUnderlined={isCurrentPathname('/saved-movies')}
              type="button"
              onClick={handleSavedMovies} />
            <AccountButton onClick={handleProfile} />
          </List>
        </nav>
      </aside>
    </Overlay>
  );
}
