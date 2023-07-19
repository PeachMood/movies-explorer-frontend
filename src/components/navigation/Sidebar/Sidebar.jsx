import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import profile from '@assets/images/profile.svg';
import { Overlay } from '@components/layout/Overlay/Overlay';
import { TextButton } from '@components/buttons/TextButton/TextButton';
import { IconButton } from '@components/buttons/IconButton/IconButton';
import { List } from '@components/utils/List/List';
import { SidebarContext } from '@context/SidebarContext';

import './Sidebar.css';

export const Sidebar = ({ className }) => {
  const { isOpened } = useContext(SidebarContext);
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarClasses = classNames('sidebar', isOpened && 'sidebar_opened');
  const listClasses = { list: 'sidebar__list', item: 'sidebar__item' };

  const isCurrentPathname = (pathname) => {
    return location.pathname === pathname;
  };

  const handleMainClick = () => {
    navigate('/');
  };

  const handleMoviesClick = () => {
    navigate('/movies');
  };

  const handleSavedMoviesClick = () => {
    navigate('/saved-movies');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

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
              onClick={handleMainClick} />
            <TextButton
              text="Фильмы"
              size="huge"
              isBold={true}
              isUnderlined={isCurrentPathname('/movies')}
              onClick={handleMoviesClick} />
            <TextButton
              text="Сохранённые фильмы"
              size="huge" isBold={true}
              isUnderlined={isCurrentPathname('/saved-movies')}
              onClick={handleSavedMoviesClick} />
            <IconButton text="Аккаунт" icon={profile} onClick={handleProfileClick} />
          </List>
        </nav>
      </aside>
    </Overlay>
  );
}
