import './CardGrid.css';
import { classNames } from '../../../utils/helpers';

/**
 * Card grid component
 *
 * Component props
 * @param {string} [className] - Additional CSS classes.
 * @param {1 | 2 | 3 | 6} [cardsPerRowMob=1] - Number of cards per row on mobile.
 * @param {1 | 2 | 3 | 4 | 6 | 12} [cardsPerRowTab=2] - Number of cards per row on tablet.
 * @param {1 | 2 | 3 | 4 | 6 | 12} [cardsPerRowDes=4] - Number of cards per row on desktop.
 * @param {node} children - The cards to put on the grid.
 * @param {object} [rest] - Additional props passed.
 *
 *
 * @example
 * <CardGrid cardsPerRowMob={2} cardsPerRowTab={3} cardsPerRowDes={6}>
 *   <Card .../>
 *   <Card .../>
 * </CardGrid>
 */

export const CardGrid = ({
  className = '',
  children,
  cardsPerRowMob = 1,
  cardsPerRowTab = 2,
  cardsPerRowDes = 4,
  ...rest
}) => {
  const validateSpan = (requestedColsPerRow, validOptions, defaultValue, totalColumns = 12) => {
    const colsPerRow = validOptions.includes(requestedColsPerRow)
      ? requestedColsPerRow
      : defaultValue;

    return totalColumns / colsPerRow;
  };

  const validCardsPerRowMob = [1, 2, 3, 6];
  const validCardsPerRowTab = [1, 2, 3, 4, 6, 12];

  const mobileSpan = validateSpan(cardsPerRowMob, validCardsPerRowMob, 1, 6);
  const tabletSpan = validateSpan(cardsPerRowTab, validCardsPerRowTab, 2, 12);
  const desktopSpan = validateSpan(cardsPerRowDes, validCardsPerRowTab, 4, 12);

  // Ensure children is an array so .map doesn't crash if there's only one child
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div className={classNames('card-grid grid', className)} {...rest}>
      {childrenArray.map((card, index) => (
        <div
          key={index}
          className={classNames(
            'card-wrapper',
            `col-span-${mobileSpan}`,
            `col-span-tablet-${tabletSpan}`,
            `col-span-desktop-${desktopSpan}`,
          )}
        >
          {card}
        </div>
      ))}
    </div>
  );
};
