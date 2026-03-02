import './List.css';
import { classNames } from '../../../utils/helpers';
import { Icon } from '../Icon/Icon';
import PropTypes from 'prop-types';

/**
 * List component
 *
 * Supports all standard HTML ul and ol attributes via `...rest`.
 *
 * @example
 * ```jsx
 * const listItems = [
 *   { id: 'list-first-item-id', value: 'Coffee' },
 *   { value: 'Tea' },
 * ];
 *
 * <List ordered items={listItems} />
 * ```
 */

export const List = ({ className = '', ordered, items, ...rest }) => {
  if (!items || items.length === 0) {
    return null;
  }

  const Component = ordered ? 'ol' : 'ul';
  const listTypeClass = ordered ? 'list--ordered' : 'list--unordered';

  return (
    <Component className={classNames('list', listTypeClass, className)} role="list" {...rest}>
      {items.map((item, index) => {
        /* If no ID is provided, use index */
        const itemKey = item.id || `li-item-${index}`;

        return (
          <li className="list__item" key={itemKey} role="listitem">
            {ordered ? (
              <div className="list__marker-wrapper">
                <span className="list__item-number" />
              </div>
            ) : (
              <div className="list__marker-wrapper">
                <Icon className="list__bullet" href="/assets/icons/solid-circle.svg" isDecorative />
              </div>
            )}
            <span className="list__value">{item.value}</span>
          </li>
        );
      })}
    </Component>
  );
};

List.propTypes = {
  /** Additional CSS classes */
  className: PropTypes.string,

  /** If true, renders an `<ol>`, otherwise renders a `<ul>` */
  ordered: PropTypes.bool,

  /** Collection of items to display. Each item must have a 'value' (the text) and an optional 'id' for the React key. */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
