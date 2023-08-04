import { useEffect, useState } from 'react';

import { TABLET_WINDOW_SIZE } from '@utils/constants';
import { BurgerButton } from '@components/buttons/BurgerButton/BurgerButton';
import { Navigation } from '@components/navigation/Navigation/Navigation';
import { Logo } from '@components/utils/Logo/Logo';
import { useAuthContext } from '@hooks/useAuthContext';
import { useWindowSize } from '@hooks/useWindowSize';

import './Header.css';

export const Header = () => {
  const { isLoggedIn } = useAuthContext();
  const { windowSize } = useWindowSize();
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsDesktop(windowSize[0] > TABLET_WINDOW_SIZE);
  }, [windowSize]);

  return (
    <header className="header">
      <div className="header__content">
        <Logo />
        {(!isLoggedIn || isDesktop) && <Navigation />}
        {isLoggedIn && !isDesktop && <BurgerButton className="header__burger-button" />}
      </div>
    </header>
  );
};
