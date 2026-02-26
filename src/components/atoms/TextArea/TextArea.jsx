import './TextArea.css';
import { classNames } from '../../../utils/helpers';
import { forwardRef } from 'react';
import { useId } from 'react';
import { FieldWrapper } from '../../molecules/internal/FieldWrapper/FieldWrapper';

/**
 * Text area component
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
 * <TextArea
 *   label="Required text area"
 *   required
 *   helperText="This is a helper text"
 *   name="message"
 *   errorHelperText={fieldErrors.message}
 * />
 */

export const TextArea = forwardRef(
  ({ className = '', id, label, required, helperText, errorHelperText, ...rest }, ref) => {
    // If the user does not provide an ID, generate a random one.
    const generateId = useId();
    const textAreaId = id || generateId;

    const helperId = !!helperText ? `${textAreaId}-helperText` : null;
    const errorId = !!errorHelperText ? `${textAreaId}-errorHelperText` : null;

    const field = (
      <textarea
        className={classNames('text-area', { 'text-area--error': errorHelperText }, className)}
        id={textAreaId}
        ref={ref}
        required={required}
        aria-describedby={errorId || helperId || undefined}
        aria-invalid={!!errorHelperText || undefined}
        {...rest}
      ></textarea>
    );

    return (
      <FieldWrapper
        label={label}
        id={textAreaId}
        helperText={helperText}
        errorHelperText={errorHelperText}
        helperId={helperId}
        errorId={errorId}
        required={required}
        field={field}
      ></FieldWrapper>
    );
  },
);

TextArea.displayName = 'TextArea';
