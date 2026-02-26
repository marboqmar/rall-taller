import './Modal.css';
import { classNames } from '../../../utils/helpers';
import { useScrollLock } from '../../../hooks/useScrollLock';
import { FocusTrap } from '../../utils/FocusTrap/FocusTrap';
import { Backdrop } from '../../atoms/internal/Backdrop/Backdrop';
import { Button } from '../../atoms/Button/Button';
import { Icon } from '../../atoms/Icon/Icon';
import { createPortal } from 'react-dom';

export const Modal = ({ className = '', isOpen, onClose, children, ...rest }) => {
  // Lock scroll when modal is open
  useScrollLock(isOpen);

  // If the modal is not open, don't render anything
  if (!isOpen) return null;

  return createPortal(
    <>
      <Backdrop isVisible={isOpen} onClick={onClose} />
      <FocusTrap isActive={isOpen}>
        <div className={classNames('modal', className)} role="dialog" aria-modal="true" {...rest}>
          <div className="modal__wrapper">{children}</div>
          <Button
            className="modal__button"
            style="transparent"
            isRound
            isIconOnly
            ariaLabel={'Close modal'}
            onClick={onClose}
          >
            <Icon isDecorative href="/assets/icons/x-mark.svg" />
          </Button>
        </div>
      </FocusTrap>
    </>,
    document.body,
  );
};
