import './StatusMessage.css';
import { classNames } from '../../../utils/helpers';
import { Icon } from '../../atoms/Icon/Icon';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';

/**
 * Status message component
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {'info' | 'success' | 'warning' | 'error'} [type="info"] - Type of message, provides its corresponding role
 * and icon.
 * @param {node} children - Status message content.
 * @param {object} [rest] - Additional props passed.
 */

const iconMap = {
  info: '/assets/icons/info.svg',
  success: '/assets/icons/success.svg',
  warning: '/assets/icons/warning.svg',
  error: '/assets/icons/error.svg',
};

const roleType = {
  info: 'status',
  success: 'status',
  warning: 'alert',
  error: 'alert',
};

export const StatusMessage = ({ className = '', type, children, ...rest }) => {
  const finalType = iconMap[type] ? type : 'info';
  const finalHref = iconMap[finalType];

  return (
    <div
      className={classNames('status-message', `status-message--${finalType}`, className)}
      role={roleType[finalType]}
      {...rest}
    >
      <div className="status-message__icon-wrapper">
        <Icon className="status-message__icon" href={finalHref} />
      </div>
      <Paragraph className="status-message__text">{children}</Paragraph>
    </div>
  );
};
