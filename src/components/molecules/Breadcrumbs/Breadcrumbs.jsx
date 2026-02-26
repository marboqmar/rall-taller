import './Breadcrumbs.css';
import { classNames } from '../../../utils/helpers';
import { Link } from 'react-router-dom';
import { Icon } from '../../../components/atoms/Icon/Icon';

/**
 * Breadcrumbs component
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {Object[]} items - Content of the breadcrumbs.
 * @param {string} items[].label - The text for the link or current page.
 * @param {string} items[].href - The URL to which this label redirects to.
 * @param {boolean} [items[].hasHomeIcon] - If true, rather than text assigns an icon to the first link.
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * const breadcrumbsInfo = [
 *   { label: 'Home', href: '/' },
 *   { label: 'Atoms', href: '/atoms' },
 * ];
 *
 * <Breadcrumbs items={breadcrumbsInfo} />
 *
 * @example
 * // Breadcrumbs with home icon
 * const breadcrumbsInfo = [
 *   { label: 'Home', href: '/', hasHomeIcon: true },
 */

export const Breadcrumbs = ({ className = '', items = [], ...rest }) => {
  const homeIconHref = '/assets/icons/home.svg';

  return (
    <nav aria-label="Breadcrumb" className={classNames('breadcrumbs', className)} {...rest}>
      <ol className="breadcrumbs__list">
        {items.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="breadcrumbs__item">
              {isLast ? (
                <span className="breadcrumbs__current" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link to={item.href} className="breadcrumbs__link simple-hover">
                    {isFirst && item.hasHomeIcon ? (
                      <Icon
                        className="breadcrumbs__icon"
                        ariaLabel="Home link"
                        href={homeIconHref}
                      />
                    ) : (
                      item.label
                    )}
                  </Link>
                  <span className="breadcrumbs__separator" aria-hidden="true">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
