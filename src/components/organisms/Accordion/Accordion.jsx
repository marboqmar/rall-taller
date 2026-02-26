import './Accordion.css';
import { classNames } from '../../../utils/helpers';
import { AccordionItem } from '../../../components/molecules/internal/AccordionItem/AccordionItem';

/**
 * Accordion component
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {Object[]} items - Content of the Accordion.
 * @param {string} items[].title - The text displayed in the accordion item heading.
 * @param {string} items[].content - The text to be displayed when the accordion item is expanded.
 * @param {1 | 2 | 3 | 4 | 5 | 6} [titleLevel=2] - Heading level. Values outside 1-6 fallback to 2.
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * const accordionItems = [
 *   { title: 'accordion 1', content: 'accordion 1 content' },
 *   { title: 'accordion 2', content: 'accordion 2 content' },
 * ];
 *
 * <Accordion items={accordionItems} titleLevel={3} />
 */

export const Accordion = ({ className = '', items = [], titleLevel, ...rest }) => {
  return (
    <div className={classNames('accordion', className)} {...rest}>
      {items.map(item => {
        return (
          <AccordionItem
            key={item.title}
            title={item.title}
            content={item.content}
            titleLevel={titleLevel}
          />
        );
      })}
    </div>
  );
};
