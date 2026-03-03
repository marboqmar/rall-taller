import { classNames } from '../../../../utils/helpers';
import { Button } from '../Button';
import { Icon } from '../../Icon/Icon';
import PropTypes from 'prop-types';

/**
 * Burger button component
 *
 * Supports all standard HTML button attributes via `...rest`.
 *
 * @example
 * ```jsx
 * <BurgerButton isExpanded={isExpanded} onClick={toggleMenu} />
 * ```
 */

export const BurgerButton = ({ className = '', isExpanded, onClick, ...rest }) => {
  return (
    <Button
      className={classNames('burger-button', { 'burger-button--expanded': isExpanded }, className)}
      onClick={onClick}
      ariaLabel={isExpanded ? 'Cerrar menú' : 'Abrir menú'}
      aria-expanded={isExpanded}
      isIconOnly
      {...rest}
    >
      <Icon isDecorative href="/assets/icons/burger.svg" />
    </Button>
  );
};

BurgerButton.propTypes = {
  /** Additional CSS classes */
  className: PropTypes.string,

  /** Adds attribute to indicate if it is expanded or not */
  isExpanded: PropTypes.bool.isRequired,

  /** Function to execute when the button is clicked */
  onClick: PropTypes.func.isRequired,
};
