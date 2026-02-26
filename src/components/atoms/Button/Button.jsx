import './Button.css';
import { classNames } from '../../../utils/helpers';

/**
 * Button component that can render as a button or link
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {'primary' | 'secondary' | 'tertiary' | 'transparent'} [style] - Button styling.
 * Defaults to 'primary' for <button>.
 * @param {'sm' | 'lg'} [paddingSize] - Padding variant. Defaults to 'sm' for <button>.
 * @param {'none' | 'sm' | 'lg' | 'pill'} [borderRadius] - Border radius. Defaults to 'sm' for <button>.
 * @param {ElementType} [component="button"] - The element to render (e.g., 'button', 'a', or Link).
 * @param {boolean} [buttonAppearance] - Applies the 'button-appearance' styling class.
 * @param {'button' | 'submit' | 'reset'} [type="button"] - HTML type attribute (buttons only).
 * @param {string} [to] - Target URL if component is Link.
 * @param {string} [role] - ARIA role.
 * @param {boolean} [isExternalLink] - Opens link in a new tab with 'noopener noreferrer' for security.
 * @param {boolean} [disabled] - Disables the button and adds disabled styling.
 * @param {boolean} [hasIcon] - Adds class to style a button containing text and an icon.
 * @param {boolean} [isIconOnly] - Adds class to style a button containing only an icon.
 * @param {boolean} [isRound] - Adds class to apply circular border radius.
 * @param {string} [ariaLabel] - Required if isIconOnly. Provides the accessible name.
 * @param {node} children - Button content.
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * // Button with secondary color and large padding
 * <Button style="secondary" paddingSize="lg">Text</Button>
 *
 * @example
 * // Link that looks like a button
 * <Button component={Link} to="/about" buttonAppearance style="primary">About</Button>
 *
 * @example
 * // Standard text link (not a button)
 * <Button component={Link} isExternalLink to="https://...">GitHub</Button>
 *
 * @example
 * // Button with icon and text
 * <Button className="button-showcase__button" hasIcon>
 *   <span>Text and icon</span>
 *   <Icon isDecorative href="/assets/icons/check.svg" />
 * </Button>
 *
 * @example
 * // Icon only button
 * <Button isIconOnly isRound ariaLabel="Open Calendar">
 *   <Icon isDecorative href="/assets/icons/check.svg" />
 * </Button>
 */

export const Button = ({
  className = '',
  style,
  paddingSize,
  borderRadius,
  component = 'button',
  buttonAppearance,
  type,
  to,
  role,
  isExternalLink,
  disabled,
  hasIcon,
  isIconOnly,
  isRound,
  ariaLabel,
  children,
  ...rest
}) => {
  const Component = component;
  const isButtonComponent = Component === 'button';

  // Apply styling default only for buttons (not links).
  const finalStyling = isButtonComponent ? style || 'primary' : style;

  // Apply link styling.
  const hasButtonAppearance = !isButtonComponent && buttonAppearance;
  const notButtonAppearance = !isButtonComponent && !hasButtonAppearance;

  // Use href or to, depending on if it is an <a> or a <Link>
  const linkTargetProp = Component === 'a' ? { href: to } : { to: to };

  // Button-specific props.
  const buttonProps = isButtonComponent
    ? {
        type: type || 'button',
        disabled: disabled,
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
    'focus-like-hover': finalStyling === 'transparent',
    [`button--padding-${paddingSize}`]: paddingSize,
    [`button--radius-${borderRadius}`]: borderRadius,
    'button-appearance': hasButtonAppearance,
    'button--link': notButtonAppearance,
    'button--disabled': disabled,
    'button--icon': hasIcon,
    'button--icon-only': isIconOnly,
    'button--round': isRound,
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
