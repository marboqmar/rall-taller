import './AccordionItem.css';
import { Heading } from '../../../atoms/Heading/Heading';
import { Button } from '../../../atoms/Button/Button';
import { Icon } from '../../../atoms/Icon/Icon';
import { Paragraph } from '../../../atoms/Paragraph/Paragraph';
import { useState } from 'react';

/**
 * Accordion item component
 *
 * Component props:
 * @param {string} title - The text displayed in the accordion heading.
 * @param {1 | 2 | 3 | 4 | 5 | 6} [titleLevel=2] - Heading level. Values outside 1-6 fallback to 2.
 * @param {string} content - The text to be displayed when the accordion is expanded.
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * <AccordionItem title="Accordion title" level={3} content="Accordion content" />
 */

export const AccordionItem = ({ title, titleLevel, content, ...rest }) => {
  const [isAccordionExpanded, setIsAccordionExpanded] = useState(false);

  const handleClick = () => {
    setIsAccordionExpanded(!isAccordionExpanded);
  };

  return (
    <div
      className={`accordion-item ${isAccordionExpanded ? 'accordion-item--expanded' : ''}`}
      {...rest}
    >
      <Heading className="accordion-item__heading" level={titleLevel} size={5}>
        <Button
          onClick={handleClick}
          className="accordion-item__button"
          aria-expanded={isAccordionExpanded}
        >
          <span className="accordion-item__heading-text">{title}</span>
          <Icon
            className="accordion-item__icon focus-like-hover"
            isDecorative
            href="/assets/icons/chevron-down.svg"
          />
        </Button>
      </Heading>

      <div className="accordion-item__content-wrapper">
        <div className="accordion-item__content-inner">
          <Paragraph className="accordion-item__content">{content}</Paragraph>
        </div>
      </div>
    </div>
  );
};
