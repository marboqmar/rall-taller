import './List.css';
import { classNames } from '../../../utils/helpers';
import { Icon } from '../Icon/Icon';

/**
 * List component
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {boolean} [ordered] - Adds styling classes to display an ordered or unordered list.
 * @param {Object[]} items - Content of the list.
 * @param {string|number} items[].id - Unique identifier for React key. If none is provided, the
 * index will be used instead.
 * @param {string} items[].value - The content of the listed item (li).
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * const listItems = [
 *   { id: 'list-first-item-id', value: 'Coffee' },
 *   { value: 'Tea' },
 * ];
 *
 * <List ordered items={listItems} />
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
            <span>{item.value}</span>
          </li>
        );
      })}
    </Component>
  );
};
