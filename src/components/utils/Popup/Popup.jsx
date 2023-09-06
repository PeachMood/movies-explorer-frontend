import classNames from 'classnames';

import { Overlay } from '@components/layout/Overlay/Overlay';
import { usePopupContext } from '@hooks/usePopupContext';

import './Popup.css';

export const Popup = () => {
  const { message, isOpened, close } = usePopupContext();
  const iconClasses = classNames('popup__icon', `popup__icon_type_${message?.type}`);
  const handleClose = () => close();

  return (
    <Overlay isVisiable={isOpened} content="center">
      <section className='popup'>
        <div className={iconClasses} />
        <p className="popup__text">{message?.text}</p>
        <button className="popup__button" type="button" onClick={handleClose} aria-label="закрыть попап" />
      </section>
    </Overlay>
  );
};
