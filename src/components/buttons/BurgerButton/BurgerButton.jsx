import { useContext } from 'react';
import classNames from 'classnames';

import { SidebarContext } from '@context/SidebarContext';

import './BurgerButton.css';

export const BurgerButton = ({ className }) => {
  const { isOpened, setIsOpened } = useContext(SidebarContext);
  const classes = classNames('burger-button', isOpened && 'burger-button_opened', className, isOpened && `${className}_opened`);

  const handleToggleClick = () => {
    setIsOpened((isOpened) => !isOpened);
  };

  return <button className={classes} onClick={handleToggleClick} />
};
