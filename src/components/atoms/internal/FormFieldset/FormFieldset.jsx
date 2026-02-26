import './FormFieldset.css';
import { classNames } from '../../../../utils/helpers';
import { HelperText } from '../../HelperText/HelperText';
import { useId } from 'react';

/**
 * FormFieldset component
 * Used for grouping related form controls.
 *
 * Component props
 * @param {string} [className] - Additional CSS classes.
 * @param {string} legend - The title/label for the group (required for accessibility).
 * @param {1 | 2 | 3 | 4 | 5 | 6} [legendLevel=3] - The visual size of the legend text.
 * @param {boolean} [hideLegend] - Visually hide the legend while keeping it for screen readers.
 * @param {boolean} [required] - Adds '*' to the legend to indicate this fieldset is required.
 * @param {string} [id=randomId] - The ID to relate fieldset and helper text. If no ID is
 * provided, it defaults to a randomly generated ID.
 * @param {string} [helperText] - Informational text below the fieldset.
 * @param {string} [errorHelperText] - Error message text; turns radio borders red.
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * <FormFieldset legend="Personal information">
 *   <Input ... />
 *   <Input ... />
 * </FormFieldset>
 *
 * @example
 * // Radio fieldset
 * <FormFieldset required legend="Radio fieldset" errorHelperText={fieldErrors.radioTest}>
 *   <Radio name="radioTest" label="Option 1" required />
 *   <Radio name="radioTest" label="Option 2" required />
 * </FormFieldset>
 */

export const FormFieldset = ({
  legend,
  legendLevel,
  hideLegend = false,
  children,
  required,
  errorHelperText,
  helperText,
  id,
  className = '',
  ...rest
}) => {
  // If the user does not provide an ID, generate a random one.
  const generatedId = useId();
  const fieldsetId = id || generatedId;

  // Generate unique ID for helper text.
  const messageId = `${fieldsetId}-message`;

  // Legend level. Default to level 3 if none is provided.
  const levelToNumber = Number(legendLevel);
  const legendFinalLevel = levelToNumber >= 1 && levelToNumber <= 6 ? levelToNumber : 3;

  // If there is an error, display it rather than the helper text.
  const isInvalid = !!errorHelperText;
  const messageToShow = errorHelperText || helperText;

  return (
    <fieldset
      id={fieldsetId}
      className={classNames('form-fieldset', { 'form-fieldset--error': isInvalid }, className)}
      aria-describedby={messageToShow ? messageId : undefined}
      {...rest}
    >
      {/* Legend */}
      {legend && (
        <legend
          className={classNames('form-fieldset__legend', `heading--${legendFinalLevel}`, {
            'sr-only': hideLegend,
          })}
        >
          {legend}
          {required && <span className="form-fieldset__legend--required"> *</span>}
        </legend>
      )}

      {/* Fieldset content */}
      <div className="form-fieldset__content">{children}</div>

      {/* Helper text */}
      {messageToShow && (
        <HelperText id={messageId} isErrorText={isInvalid}>
          {messageToShow}
        </HelperText>
      )}
    </fieldset>
  );
};
