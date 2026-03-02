import './Icon.css';
import { classNames } from '../../../utils/helpers';
import PropTypes from 'prop-types';

/**
 * Icon component
 *
 * Supports all standard HTML icon attributes via `...rest`.
 *
 * @example
 * ```jsx
 * <Icon isDecorative>
 *   <path d="M9..." />
 * </Icon>
 * ```
 *
 * @example
 * Icon from a file
 * ```jsx
 * <Icon href="/assets/icons/check.svg" />
 * ```
 *
 * @example
 * Icon from SVG sprite
 * ```jsx
 * <Icon name="icon-check" />
 * ```
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

Icon.propTypes = {
  /** Additional CSS classes */
  className: PropTypes.string,

  /** Position and dimension of the icon */
  viewBox: PropTypes.string,

  /** ID of the icon in the global sprite */
  name: PropTypes.string,

  /** Path to a standalone .svg file */
  href: PropTypes.string,

  /** If true, hides icon from screen readers. If false, 'ariaLabel' is mandatory */
  isDecorative: PropTypes.bool,

  /** Provides the accessible name. Required if isDecorative is false */
  ariaLabel: PropTypes.string,

  /** Icon content */
  children: PropTypes.node,
};
