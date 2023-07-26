import classNames from 'classnames';

import photo from '@assets/images/photo.jpg';
import { Link } from '@components/navigation/Link/Link';
import { List } from '@components/utils/List/List';
import { birthday } from '@utils/constants';
import { getAge, getDeclination } from '@utils/time';

import './Student.css';

export const Student = ({ className }) => {
  const listClasses = { list: 'student__list' };
  const age = getAge(birthday);
  const declination = getDeclination(age);

  return (
    <article className={classNames('student', className)}>
      <div className="student__info">
        <h3 className="student__name">Анна</h3>
        <p className="student__summary">Фронтенд-разработчик, {age + declination}</p>
        <p className="student__description">
          В настоящее время прохожу обучение по направлению "Computer Science and System Design" в
          НГУ. Начинающий фронтенд-разработчик с опытом
          командной разработки высоконагруженной тестирующей системы NSUts.
          Уверенно владею инструментами, необходимым для разработки сайтов. Помимо этого обладаю
          знаниями в области объектно-ориентированного программирования, компьютерных сетей, теории
          алгоритмов и операционных систем.
        </p>
        <List className={listClasses}>
          <Link text="Github" weight="bold" href="https://github.com/PeachMood" target="_blank" rel="noreferrer" />
          <Link text="Gitlab" weight="bold" href="https://gitlab.com/black_raven" target="_blank" rel="noreferrer" />
        </List>
      </div>
      <img className="student__photo" src={photo} alt="фотография студента" />
    </article >
  );
};
