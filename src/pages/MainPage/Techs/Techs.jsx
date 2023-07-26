import { Section } from '@components/layout/Section/Section';

import './Techs.css';

export const Techs = () => {
  return (
    <Section className="techs" title="Технологии">
      <article className="techs__article">
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__cards">
          <li className="techs__card">HTML</li>
          <li className="techs__card">CSS</li>
          <li className="techs__card">JS</li>
          <li className="techs__card">React</li>
          <li className="techs__card">Git</li>
          <li className="techs__card">Express.js</li>
          <li className="techs__card">mongoDB</li>
        </ul>
      </article>
    </Section>
  );
};
