import { Section } from '@components/layout/Section/Section';

import { Student } from './Student/Student';
import { Portfolio } from './Portfolio/Portfolio';
import './AboutMe.css';

export const AboutMe = () => {
  return (
    <Section className="about-me" title="Студент">
      <Student className="about-me__student" />
      <Portfolio className="about-me__portfolio" />
    </Section>
  );
};
