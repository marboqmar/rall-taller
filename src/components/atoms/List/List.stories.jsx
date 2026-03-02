import { List } from './List';

export default {
  title: 'Atoms/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {
    ordered: {
      control: 'boolean',
      defaultValue: 'false',
    },
  },
};

export const Default = {
  args: {
    ordered: false,
    items: [{ id: 'list-first-item-id', value: 'Coffee' }, { value: 'Tea' }],
  },
};
