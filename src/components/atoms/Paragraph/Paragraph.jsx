import './Paragraph.css';
import { classNames } from '../../../utils/helpers';
import PropTypes from 'prop-types';

/**
 * Paragraph component
 *
 * Supports all standard HTML paragraph attributes via `...rest`.
 *
 * @example
 * ```jsx
 * <Paragraph>Lorem ipsum</Paragraph>
 * ```
 */

export const Paragraph = ({ className = '', isBold, children, ...rest }) => {
  const classes = classNames('paragraph', className, { 'paragraph--bold': isBold });

  return (
    <p className={classes} {...rest}>
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  /** Additional CSS classes */
  className: PropTypes.string,

  /** If true, modifies the font weight to bold */
  isBold: PropTypes.bool,

  /** Text to display */
  children: PropTypes.node.isRequired,
};
