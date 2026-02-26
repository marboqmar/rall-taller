import './SelectionControlWrapper.css';
import { Label } from '../../../atoms/Label/Label';
import { HelperText } from '../../../atoms/HelperText/HelperText';

/**
 * Selection control wrapper
 * It is used to provide the wrapper, label, and helper text to selection controls.
 *
 * Component props:
 * @param {string} [label] - The content of the label. Needed to avoid accessibility issues.
 * @param {string} [id] - The ID to relate label, input, and helper text.
 * @param {string} [helperText] - Informational text below the input.
 * @param {string} [errorHelperText] - Error message text; turns input border red.
 * @param {boolean} [required] - Adds '*' to the label to indicate this field is required.
 * @param {node} [selector] - The selector to be wrapped (checkbox or radio).
 * @param {string} [helperId] - This ID is assigned to the label and the input receives the same
 * helperId as its aria-describedby.
 * @param {string} [errorId] - If there is an error this ID is assigned to the label and the input
 * receives the same errorId as its aria-describedby.
 *
 * @example
 * const selector = (
 *   <>
 *     <input type="checkbox" .../>
 *     <Icon href="/assets/icons/check.svg" ... />
 *   </>
 * );
 *
 * <SelectionControlWrapper
 *  label={label}
 *  id={checkboxId}
 *  helperText={helperText}
 *  errorHelperText={errorHelperText}
 *  required={required}
 *  selector={selector}
 * errorId={errorId}
 * ></SelectionControlWrapper>
 */

export const SelectionControlWrapper = ({
  label,
  id,
  helperText,
  errorHelperText,
  required,
  selector,
  errorId,
  helperId,
}) => {
  // If there is an error, display it rather than the helper text.
  const isInvalid = !!errorHelperText;
  const messageToShow = errorHelperText || helperText;

  return (
    <div className="selection-control">
      <div className="selection-control__field">
        {/* Input */}
        <div className="selection-control__selector">{selector}</div>

        <div className="selection-control__content">
          {/* Label */}
          {label && (
            <Label htmlFor={id} required={required}>
              {label}
            </Label>
          )}

          {/* Helper text */}
          {messageToShow && (
            <HelperText id={errorId || helperId} isErrorText={isInvalid}>
              {messageToShow}
            </HelperText>
          )}
        </div>
      </div>
    </div>
  );
};
