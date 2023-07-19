import classNames from 'classnames';

import { List } from '@components/utils/List/List';

import './Portfolio.css';

export const Portfolio = ({ className }) => {
  const listClasses = { list: 'portfolio__projects', item: 'portfolio__project' };

  return (
    <article className={classNames('portfolio', className)}>
      <h3 className="portfolio__title">Портфолио</h3>
      <List className={listClasses}>
        <a
          className="portfolio__link"
          href="https://github.com/PeachMood/how-to-learn"
          target="_blank"
          rel="noreferrer">
          Статичный сайт
        </a>
        <a
          className="portfolio__link"
          href="https://github.com/PeachMood/russian-travel"
          target="_blank"
          rel="noreferrer">
          Адаптивный сайт
        </a>
        <a
          className="portfolio__link"
          href="https://github.com/PeachMood/mesto"
          target="_blank"
          rel="noreferrer">
          Одностраничное приложение
        </a>
      </List>
    </article >
  );
};
