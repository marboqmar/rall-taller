import './MobileMenu.css';
import { BurgerButton } from '../../atoms/Button/BurgerButton/BurgerButton';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../../atoms/Button/Button';
import { Icon } from '../../atoms/Icon/Icon';
import { useScrollLock } from '../../../hooks/useScrollLock';
import { FocusTrap } from '../../utils/FocusTrap/FocusTrap';
import { Backdrop } from '../../atoms/internal/Backdrop/Backdrop';
import { classNames } from '../../../utils/helpers';

/**
 * Mobile menu component
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {Object[]} items - Content of the mobile menu.
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * const items = [
 *   {
 *     text: 'Atoms',
 *     url: '/atoms',
 *   },
 *   {
 *     text: 'Molecules',
 *     url: '/molecules',
 *   },
 * ];
 *
 * <MobileMenu items={items} />
 */

export const MobileMenu = ({ className = '', items, ...rest }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleMenu = () => setIsExpanded(!isExpanded);
  const safeItems = Array.isArray(items) ? items : [];

  // Lock the scroll when the menu is open
  useScrollLock(isExpanded);

  return (
    <div
      className={classNames('mobile-menu', { 'mobile-menu--expanded': isExpanded }, className)}
      {...rest}
    >
      <BurgerButton isExpanded={isExpanded} onClick={toggleMenu} />
      <Backdrop isVisible={isExpanded} onClick={toggleMenu} />
      <FocusTrap isActive={isExpanded}>
        <div className="mobile-menu__content">
          <Button
            onClick={toggleMenu}
            isIconOnly
            isRound
            style="transparent"
            ariaLabel="Close menu"
          >
            <Icon isDecorative href="/assets/icons/x-mark.svg" />
          </Button>
          <nav className="mobile-menu__nav">
            {safeItems.map((link, index) => (
              <NavLink
                className="mobile-menu__link header__link button button--link"
                key={`link-${index}`}
                to={link.url}
                onClick={() => setIsExpanded(false)}
              >
                {link.text}
              </NavLink>
            ))}
          </nav>
        </div>
      </FocusTrap>
    </div>
  );
};
