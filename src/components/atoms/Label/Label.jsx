import './Label.css';
import { classNames } from '../../../utils/helpers';

/**
 * Label component
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {string} htmlFor - ID of the associated input element.
 * @param {object} [rest] - Additional props passed.
 * @param {node} children - Label content.
 * @param {boolean} required - Adds '*' to indicate this field is required.
 *
 * @example
 * <Label htmlFor="email-field" required>
 *   Email Address
 * </Label>
 */

export const Label = ({ className = '', htmlFor, children, required, ...rest }) => {
  return (
    <label htmlFor={htmlFor} className={classNames('label', className)} {...rest}>
      {children}
      {required && <span className="label--required"> *</span>}
    </label>
  );
};
