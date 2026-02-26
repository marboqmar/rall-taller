import { Accordion } from '../../../components/organisms/Accordion/Accordion';
import { Heading } from '../../../components/atoms/Heading/Heading';

const accordionItems = [
  {
    title: 'How do I reset my password?',
    content:
      'Navigate to the settings page and click "Security". From there, you can follow the prompts to update your credentials safely.',
  },
  { title: 'Premium Member Benefits', content: 'Get unlimited access to all training modules' },
];

export const AccordionShowcase = () => {
  return (
    <div className="accordion-showcase showcase-item">
      <Heading>Accordion</Heading>
      <Accordion items={accordionItems} titleLevel={3} />
    </div>
  );
};
