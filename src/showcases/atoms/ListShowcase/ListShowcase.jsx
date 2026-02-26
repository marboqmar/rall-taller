import './ListShowcase.css';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { DefinitionList } from '../../../components/atoms/DefinitionList/DefinitionList';
import { List } from '../../../components/atoms/List/List';

const descriptionItems = [
  { id: 'item-color', term: 'color', description: 'blue' },
  { id: 'item-material', term: 'Material', description: 'cotton' },
  {
    term: 'Size',
    description:
      'long item. This is a very long item that will wrap to a second line on smaller screens to test alignment',
  },
];

const listItems = [
  { id: 'list-first-item-id', value: 'Coffee' },
  { id: 'list-second-item-id', value: 'Tea' },
  {
    value:
      'Long item. This is a very long item that will wrap to a second line on smaller screens to test alignment',
  },
];

export const ListShowcase = () => {
  return (
    <div className="list-showcase showcase-item">
      <Heading>Lists</Heading>
      <div className="list-showcase__wrapper showcase-item__wrapper">
        <div className="list-showcase__example showcase-item__example">
          <Heading level={3}>Definition list</Heading>
          <DefinitionList items={descriptionItems} />
        </div>
        <div className="list-showcase__example showcase-item__example">
          <Heading level={3}>Ordered list</Heading>
          <List className="list-showcase__list-counter" ordered items={listItems} />
        </div>
        <div className="list-showcase__example showcase-item__example">
          <Heading level={3}>Unordered list</Heading>
          <List items={listItems} />
        </div>
      </div>
    </div>
  );
};
