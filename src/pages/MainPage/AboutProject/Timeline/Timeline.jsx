import classNames from 'classnames';

import { List } from '@components/utils/List/List';

import './Timeline.css';

export const Timeline = ({ className }) => {
  const classes = { list: classNames('timeline', className) };

  return (
    <List className={classes}>
      <>
        <div className="timeline__duration timeline__duration_color_accent">1 неделя</div>
        <p className="timeline__caption">Back-end</p>
      </>
      <>
        <div className="timeline__duration timeline__duration_color_light">4 недели</div>
        <p className="timeline__caption">Front-end</p>
      </>
    </List>
  );
};
