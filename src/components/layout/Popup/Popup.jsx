import classNames from 'classnames';

import { Overlay } from '@components/Overlay/Overlay';

import './Popup.css';

export const Popup = ({ text, status = 'error', onClose }) => {
  const isVisiable = !!text;
  const iconClasses = classNames('popup__icon', `popup__icon_status_${status}`);

  return (
    <Overlay isVisiable={isVisiable} content="center">
      <section className='popup'>
        <div className={iconClasses} />
        <p className="popup__text">{text}</p>
        <button className="popup__button" type="button" onClick={onClose} aria-label="закрыть попап" />
      </section>
    </Overlay>
  );
};
