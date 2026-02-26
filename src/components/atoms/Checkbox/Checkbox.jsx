import './Checkbox.css';
import { classNames } from '../../../utils/helpers';
import { forwardRef } from 'react';
import { Icon } from '../Icon/Icon';
import { useId } from 'react';
import { SelectionControlWrapper } from '../../molecules/internal/SelectionControlWrapper/SelectionControlWrapper';

/**
 * Checkbox component
 * Uses forwardRef to allow the parent component to grab a reference to a DOM node inside a child
 * component.
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {string} [label] - The content of the label. Needed to avoid accessibility issues.
 * @param {string} [id=randomId] - The ID to relate label, input, and helper text. If no ID is
 * provided, it defaults to a randomly generated ID.
 * @param {string} [helperText] - Informational text below the input.
 * @param {string} [errorHelperText] - Error message text; turns input border red.
 * @param {boolean} [required] - Adds '*' to the label to indicate this field is required and
 * triggers browser validation.
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * <Checkbox
 *   label="Email notifications"
 *   name="email_pref"
 *   errorHelperText={fieldErrors.email_pref}
 * />
 *
 * @example
 * // Disabled checkbox
 * <Checkbox disabled />
 */

export const Checkbox = forwardRef(
  ({ className = '', label, id, helperText, errorHelperText, required, ...rest }, ref) => {
    // If the user does not provide an ID, generate a random one.
    const generatedId = useId();
    const checkboxId = id || generatedId;

    const helperId = !!helperText ? `${checkboxId}-helperText` : null;
    const errorId = !!errorHelperText ? `${checkboxId}-errorHelperText` : null;

    const selector = (
      <>
        <input
          id={checkboxId}
          className={classNames('checkbox', className, {
            'checkbox--error': !!errorHelperText,
          })}
          type="checkbox"
          ref={ref}
          required={required}
          aria-describedby={errorId || helperId || undefined}
          aria-invalid={!!errorHelperText || undefined}
          {...rest}
        />
        <Icon
          href="/assets/icons/check.svg"
          className="checkbox__icon"
          aria-hidden="true"
          isDecorative
        />
      </>
    );

    return (
      <SelectionControlWrapper
        label={label}
        id={checkboxId}
        helperText={helperText}
        errorHelperText={errorHelperText}
        required={required}
        selector={selector}
        errorId={errorId}
        helperId={helperId}
      ></SelectionControlWrapper>
    );
  },
);

Checkbox.displayName = 'Checkbox';
