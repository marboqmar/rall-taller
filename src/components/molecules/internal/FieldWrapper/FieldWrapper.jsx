import { Label } from '../../../atoms/Label/Label';
import { HelperText } from '../../../atoms/HelperText/HelperText';

/**
 * Field wrapper
 * It is used to provide the wrapper, label, and helper text to fields.
 *
 * Component props:
 * @param {string} [label] - The content of the label. Needed to avoid accessibility issues.
 * @param {string} [id] - The ID to relate label, input, and helper text.
 * @param {string} [helperText] - Informational text below the input.
 * @param {string} [errorHelperText] - Error message text; turns input border red.
 * @param {boolean} [required] - Adds '*' to the label to indicate this field is required.
 * @param {node} [field] - The form element to be wrapped (input, or textarea).
 * @param {string} [helperId] - This ID is assigned to the label and the input receives the same
 * helperId as its aria-describedby.
 * @param {string} [errorId] - If there is an error this ID is assigned to the label and the input
 * receives the same errorId as its aria-describedby.
 *
 * @example
 * const field = (
 *  <input
 *    id={inputId}
 *    className={classNames('input', className, { 'input--error': !!errorHelperText })}
 *    type={type}
 *    ref={ref}
 *    {...errorProps}
 *    {...rest}
 *  />
 * );
 *
 * <FieldWrapper
 *   label={label}
 *   id={inputId}
 *   helperText={helperText}
 *   errorHelperText={errorHelperText}
 *   required={required}
 *   errorId={errorId}
 *   field={field}
 * ></FieldWrapper>
 */

export const FieldWrapper = ({
  label,
  id,
  helperText,
  errorHelperText,
  helperId,
  errorId,
  required,
  field,
}) => {
  // If there is an error, display it rather than the helper text.
  const isInvalid = !!errorHelperText;
  const messageToShow = errorHelperText || helperText;

  return (
    <div className="field-wrapper">
      {/* Label */}
      {label && (
        <Label htmlFor={id} required={required}>
          {label}
        </Label>
      )}

      {/* Field */}
      {field}

      {/* Helper text */}
      {messageToShow && (
        <HelperText id={errorId || helperId} isErrorText={isInvalid}>
          {messageToShow}
        </HelperText>
      )}
    </div>
  );
};
