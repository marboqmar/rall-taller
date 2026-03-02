import './Heading.css';
import { classNames } from '../../../utils/helpers';
import PropTypes from 'prop-types';

/**
 * Heading component
 *
 * Supports all standard HTML heading attributes via `...rest`.
 *
 * @example
 * ```jsx
 * <Heading level={1} size={3}>Subtitle-style H1</Heading>
 * ```
 */

export const Heading = ({ level = 2, size, children, className = '', ...rest }) => {
  /* Normalise size override */
  const sizeToNumber = Number(size);
  const isSizeValid = sizeToNumber >= 1 && sizeToNumber <= 3;

  /* Normalise level*/
  const levelToNumber = Number(level);
  const headingLevel = levelToNumber >= 1 && levelToNumber <= 3 ? levelToNumber : 2;

  const HeadingComponent = `h${headingLevel}`;
  const visualLevel = isSizeValid ? sizeToNumber : headingLevel;

  return (
    <HeadingComponent
      className={classNames('heading', `heading--${visualLevel}`, className)}
      {...rest}
    >
      {children}
    </HeadingComponent>
  );
};

Heading.propTypes = {
  /** Additional CSS classes */
  className: PropTypes.string,

  /** Heading level. Defaults to 2 and values outside 1-3 fallback to 2 */
  level: PropTypes.oneOf([1, 2, 3]),

  /** Visual size override. Values outside 1-3 fallback to 2 */
  size: PropTypes.oneOf([1, 2, 3]),

  /** Text to display */
  children: PropTypes.node.isRequired,
};
