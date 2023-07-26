import { Header } from '@components/layout/Header/Header';
import { Footer } from '@components/layout/Footer/Footer';

import { Promo } from './Promo/Promo';
import { AboutProject } from './AboutProject/AboutProject';
import { Techs } from './Techs/Techs';
import { AboutMe } from './AboutMe/AboutMe';

import './MainPage.css';

export const MainPage = () => {
  return (
    <div className="main">
      <Header />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
};
