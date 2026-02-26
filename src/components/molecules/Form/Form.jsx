import './Form.css';
import { classNames } from '../../../utils/helpers';
import { Button } from '../../atoms/Button/Button';
import { Heading } from '../../atoms/Heading/Heading';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';

/**
 * Form component
 * When creating a form, to group related fields (like names, addresses, or radio buttons), use the
 * FormFieldset component to maintain accessibility.
 * The class "form__grid" is available to facilitate styling and maintain design cohesion.
 *
 * @param {string} [className=''] - Additional CSS classes.
 * @param {string} [title] - Heading content.
 * @param {1 | 2 | 3 | 4 | 5 | 6} [titleLevel] - Heading level. Values outside 1-6 fallback to 2.
 * @param {1 | 2 | 3 | 4 | 5 | 6} [titleSize] - The visual size override for the title.
 * @param {function} onSubmit - Function called when the form is submitted.
 * @param {string} [submitText='Submit'] - The text displayed on the primary submit button.
 * @param {string} [servererror] - Error message returned by the server.
 * @param {boolean} [isSuccess] - Generates a success message.
 * @param {node} children - Form content.
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * <Form title="Form">
 *   <FormFieldset legend=" preferences">
 *     <Checkbox label="Email notifications" name="email_pref" />
 *     <Checkbox label="SMS notifications" name="sms_pref" />
 *   </FormFieldset>
 * </Form>
 *
 * @example
 * // Example using the class "form__grid"
 * <FormFieldset legend="Personal information">
 *   <div className="form__grid">
 *     <Input ... />
 *     <Input ... />
 *   </div>
 * </FormFieldset>
 */

export const Form = ({
  className = '',
  title,
  titleLevel,
  titleSize,
  onSubmit,
  submitText = 'Submit',
  servererror,
  isSuccess,
  children,
  ...rest
}) => {
  return (
    <form className={classNames('form', className)} onSubmit={onSubmit} noValidate {...rest}>
      {/* Title */}
      {title && (
        <Heading className="form__heading" level={titleLevel} size={titleSize}>
          {title}
        </Heading>
      )}

      {/* Server side error message */}
      {servererror && <Paragraph className="form__error-message">{servererror}</Paragraph>}

      {/* Form content */}
      <div className="form__wrapper">{children}</div>

      {/* Submit button */}
      <div className="form__button">
        <Button type="submit" style="primary">
          {submitText}
        </Button>
      </div>
    </form>
  );
};
