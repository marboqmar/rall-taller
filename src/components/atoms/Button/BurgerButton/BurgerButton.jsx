import { classNames } from '../../../../utils/helpers';
import { Button } from '../Button';
import { Icon } from '../../Icon/Icon';

/**
 * Burger button component
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {boolean} isExpanded - Adds attribute to indicate if it is expanded or not.
 * @param {function} onClick - Function to execute when the button is clicked.
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * <BurgerButton isExpanded={isExpanded} onClick={toggleMenu} />
 */

export const BurgerButton = ({ className = '', isExpanded, onClick, ...rest }) => {
  return (
    <Button
      className={classNames('burger-button', { 'burger-button--expanded': isExpanded }, className)}
      style="transparent"
      onClick={onClick}
      ariaLabel="Toggle menu"
      aria-expanded={isExpanded}
      isIconOnly
      isRound
      {...rest}
    >
      <Icon isDecorative href="/assets/icons/burger.svg" />
    </Button>
  );
};
