import classNames from 'classnames';

import './Overlay.css';

export const Overlay = ({ isVisiable, content = 'center', className, children }) => {
  const classes = classNames(
    'overlay',
    isVisiable && 'overlay_visiable',
    `overlay_content_${content}`,
    className,
  );

  return <div className={classes}>
    {children}
  </div>
}
