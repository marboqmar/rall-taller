import './SearchBox.css';
import { classNames } from '../../../utils/helpers';
import { Input } from '../../../components/atoms/Input/Input';
import { Button } from '../../../components/atoms/Button/Button';
import { Icon } from '../../atoms/Icon/Icon';

/**
 * Search box component
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {string} [inputPlaceholder] - Input's place holder text.
 * @param {string} inputAriaLabel - Provides the accessible name for the input.
 * @param {string} [buttonAriaLabel="Submit search"] - Provides the accessible name for the button.
 * @param {function} onSubmit - Function called when the form is submitted.
 * @param {object} [rest] - Additional props passed.
 *
 */

export const SearchBox = ({
  className = '',
  inputPlaceholder,
  inputAriaLabel,
  buttonAriaLabel = 'Submit search',
  onSubmit,
  ...rest
}) => {
  const handleSubmit = event => {
    // Prevent the browser from refreshing the page.
    event.preventDefault();

    // If there is no onSubmit, stop the execution.
    if (!onSubmit) return;

    // Extract all data from inputs that have a "name" attribute.
    const formData = new FormData(event.currentTarget);

    // Get the value of the input with "search-query" as its name.
    const searchTerm = formData.get('search-query');

    onSubmit(searchTerm);
  };

  return (
    <form
      role="search"
      className={classNames('search-box', className)}
      onSubmit={handleSubmit}
      {...rest}
    >
      <Input
        isPlain
        type="search"
        name="search-query"
        className="search-box__input"
        placeholder={inputPlaceholder}
        aria-label={inputAriaLabel}
      />
      <Button className="search-box__button" type="submit" isIconOnly ariaLabel={buttonAriaLabel}>
        <Icon className="search-box__icon" isDecorative href="/assets/icons/search.svg" />
      </Button>
    </form>
  );
};
