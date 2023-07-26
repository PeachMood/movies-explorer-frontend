import { useEffect, useState } from 'react';

import { BurgerButton } from '@components/buttons/BurgerButton/BurgerButton';
import { Navigation } from '@components/navigation/Navigation/Navigation';
import { Sidebar } from '@components/navigation/Sidebar/Sidebar';
import { Logo } from '@components/utils/Logo/Logo';
import { useAuthContext } from '@hooks/useAuthContext';
import { useWindowSize } from '@hooks/useWindowSize';
import { tablet } from '@utils/constants'

import './Header.css';

export const Header = () => {
  const { isLoggedIn } = useAuthContext();
  const [isDesktop, setIsDesktop] = useState(true);
  const windowSize = useWindowSize();

  useEffect(() => {
    setIsDesktop(windowSize[0] > tablet.width);
  }, [windowSize]);

  return (
    <header className="header">
      <div className="header__content">
        <Logo />
        {(!isLoggedIn || isDesktop) && <Navigation />}
        {isLoggedIn && !isDesktop && <BurgerButton className="header__burger-button" />}
        {isLoggedIn && !isDesktop && <Sidebar />}
      </div>
    </header>
  );
};
