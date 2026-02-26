import './Icon.css';
import { classNames } from '../../../utils/helpers';

/**
 * Icon component
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {string} [viewBox="0 0 24 24"] - Position and dimension of the icon.
 * @param {string} [name] - ID of the icon in the global sprite (/assets/icons/sprite.svg).
 * @param {string} [href] - Path to a standalone .svg file or external sprite.
 * @param {boolean} [isDecorative=false] If true, hides icon from screen readers.
 * If false, 'ariaLabel' is mandatory.
 * @param {string} [ariaLabel] - Required if isDecorative is false. Provides the accessible name.
 * @param {node} children - Icon content.
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * <Icon isDecorative>
 *   <path d="M9..." />
 * </Icon>
 *
 * @example
 * // Icon from a file
 * <Icon href="/assets/icons/check.svg"></Icon>
 *
 * @example
 * // Icon from SVG sprite
 * <Icon name="icon-check"></Icon>
 */

export const Icon = ({
  className = '',
  viewBox = '0 0 24 24',
  name,
  href,
  isDecorative = false,
  ariaLabel,
  children,
  ...rest
}) => {
  const accessibilityProps = isDecorative
    ? {
        'aria-hidden': 'true',
      }
    : {
        'role': 'img',
        'aria-label': ariaLabel,
      };

  const spritePath = name ? `/assets/icons/sprite.svg#${name}` : href;
  const content = spritePath ? <use href={spritePath} /> : children;

  return (
    <svg
      viewBox={viewBox}
      className={classNames('icon', className)}
      tabIndex={-1}
      focusable="false"
      {...accessibilityProps}
      {...rest}
    >
      {content}
    </svg>
  );
};
