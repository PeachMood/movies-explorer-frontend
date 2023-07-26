import { Children } from 'react';
import classNames from 'classnames';

import './List.css';

export const List = ({ className = { list: '', item: '' }, children, ...props }) => {
  return (
    <ul className={classNames('list', className.list)} {...props}>
      {Children.map(children, (child) => <li className={className.item || null}>{child}</li>)}
    </ul>
  );
};
