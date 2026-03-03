import './Button.css';
import { classNames } from '../../../utils/helpers';
import PropTypes from 'prop-types';

/**
 * Button component that can render as a button or link
 *
 * Supports all standard HTML button attributes via `...rest`.
 *
 * @example
 * ```jsx
 * <Button>Text</Button>
 * ```
 *
 * @example
 * Link with button appearance
 * ```jsx
 * <Button component={Link} to="/about" buttonAppearance style="primary">About</Button>
 * ```
 *
 * @example
 * Link
 * ```jsx
 * <Button component={Link} isExternalLink to="https://...">GitHub</Button>
 * ```
 *
 * @example
 * Icon only button
 * ```jsx
 * <Button isIconOnly isRound ariaLabel="Open Calendar">
 *   <Icon isDecorative href="/assets/icons/check.svg" />
 * </Button>
 * ```
 */

export const Button = ({
  className = '',
  style,
  component = 'button',
  buttonAppearance,
  type,
  to,
  role,
  isExternalLink,
  isIconOnly,
  ariaLabel,
  children,
  ...rest
}) => {
  const Component = component;
  const isButtonComponent = Component === 'button';

  // Apply styling default only for buttons (not links).
  const finalStyling = isButtonComponent & !isIconOnly ? style || 'primary' : style;

  // Apply link styling.
  const hasButtonAppearance = !isButtonComponent && buttonAppearance;
  const notButtonAppearance = !isButtonComponent && !hasButtonAppearance;

  // Use href or to, depending on if it is an <a> or a <Link>
  const linkTargetProp = Component === 'a' ? { href: to } : { to: to };

  // Button-specific props.
  const buttonProps = isButtonComponent
    ? {
        type: type || 'button',
      }
    : {};

  // Link-specific props
  const externalLinkProps =
    isExternalLink && !isButtonComponent
      ? {
          rel: 'noopener noreferrer',
          target: '_blank',
        }
      : {};

  const classes = classNames('button', className, {
    [`button--${finalStyling}`]: finalStyling,
    'button-appearance': hasButtonAppearance,
    'button--link focus-like-hover': notButtonAppearance,
    'button--icon-only focus-like-hover': isIconOnly,
  });

  return (
    <Component
      className={classes}
      role={role}
      aria-label={ariaLabel}
      {...linkTargetProp}
      {...buttonProps}
      {...externalLinkProps}
      {...rest}
    >
      {children}
    </Component>
  );
};

Button.propTypes = {
  /** Additional CSS classes */
  className: PropTypes.string,

  /** Button styling variant. Defaults to 'primary' for `<button>` elements */
  style: PropTypes.oneOf(['primary']),

  /** The element or component to render (e.g., 'button', 'a', or Link) */
  component: PropTypes.elementType,

  /** Applies the 'button-appearance' styling class to non-button elements */
  buttonAppearance: PropTypes.bool,

  /** HTML type attribute, used only when component is 'button' */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),

  /** Target URL or path if component is a link */
  to: PropTypes.string,

  /** ARIA role for accessibility */
  role: PropTypes.string,

  /** If true, opens link in a new tab with 'noopener noreferrer' for security */
  isExternalLink: PropTypes.bool,

  /** Applies specific styling for buttons containing only an icon */
  isIconOnly: PropTypes.bool,

  /** Required if isIconOnly is true. Provides the accessible name for screen readers */
  ariaLabel: PropTypes.string,

  /** Button content */
  children: PropTypes.node.isRequired,
};
