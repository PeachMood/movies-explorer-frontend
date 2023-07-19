import { Section } from '@components/layout/Section/Section';
import { List } from '@components/utils/List/List';

import { Article } from './Article/Article';
import { Timeline } from './Timeline/Timeline';
import './AboutProject.css';

export const AboutProject = () => {
  const listClasses = { list: 'about-project__articles' };

  return (
    <Section className="about-project" title="О проекте">
      <List className={listClasses}>
        <Article
          title="Дипломный проект включал 5 этапов"
          text="Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки." />
        <Article
          title="На выполнение диплома ушло 5 недель"
          text="У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься." />
      </List>
      <Timeline className="about-project__timeline" />
    </Section>
  );
}
