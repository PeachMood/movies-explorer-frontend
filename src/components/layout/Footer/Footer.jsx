import { Link } from '@components/navigation/Link/Link';
import { List } from '@components/utils/List/List';
import { getCurrentYear } from '@utils/time';

import './Footer.css';

export const Footer = () => {
  const listClasses = { list: 'footer__links' };

  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__container">
          <p className="footer__copyright">&copy; {getCurrentYear()}</p>
          <List className={listClasses}>
            <Link text="Яндекс.Практикум" size="small" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" />
            <Link text="Github" size="small" href="https://github.com/PeachMood" target="_blank" rel="noreferrer" />
            <Link text="Gitlab" size="small" href="https://gitlab.com/black_raven" target="_blank" rel="noreferrer" />
          </List>
        </div>
      </div>
    </footer>
  );
};
