import './Radio.css';
import { classNames } from '../../../utils/helpers';
import { forwardRef } from 'react';
import { Icon } from '../Icon/Icon';
import { useId } from 'react';
import { SelectionControlWrapper } from '../../molecules/internal/SelectionControlWrapper/SelectionControlWrapper';

/**
 * Radio component
 * Uses forwardRef to allow the parent component to grab a reference to a DOM node inside a child
 * component.
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {string} [label] - The content of the label. Needed to avoid accessibility issues.
 * @param {string} [id=randomId] - The ID to relate label, input, and helper text. If no ID is
 * provided, it defaults to a randomly generated ID.
 * @param {boolean} [required] - Triggers browser validation.
 * @param {string} [helperText] - Informational text below the input.
 * @param {string} [errorHelperText] - Error message text; turns input border red.
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * <Radio name="radio-test" label="Radio" value="option-1" />
 *
 * @example
 * // Disabled radio
 * <Radio disabled />
 */

export const Radio = forwardRef(
  ({ className = '', label, id, helperText, errorHelperText, name, required, ...rest }, ref) => {
    // If the user does not provide an ID, generate a random one.
    const generatedId = useId();
    const radioId = id || generatedId;

    const helperId = !!helperText ? `${radioId}-helperText` : null;
    const errorId = !!errorHelperText ? `${radioId}-errorHelperText` : null;

    const selector = (
      <>
        <input
          id={radioId}
          className={classNames('radio', className, {
            'radio--error': !!errorHelperText,
          })}
          type="radio"
          name={name}
          ref={ref}
          required={required}
          aria-describedby={errorId || helperId || undefined}
          aria-invalid={!!errorHelperText || undefined}
          {...rest}
        />
        <Icon
          href="/assets/icons/solid-circle.svg"
          className="radio__icon"
          aria-hidden="true"
          isDecorative
        />
      </>
    );

    return (
      <SelectionControlWrapper
        label={label}
        id={radioId}
        helperText={helperText}
        errorHelperText={errorHelperText}
        selector={selector}
        errorId={errorId}
        helperId={helperId}
      ></SelectionControlWrapper>
    );
  },
);

Radio.displayName = 'Radio';
