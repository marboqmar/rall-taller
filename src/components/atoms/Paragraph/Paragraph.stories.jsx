import { Paragraph } from './Paragraph';

export default {
  title: 'Atoms/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  argTypes: {
    isBold: {
      control: 'boolean',
      defaultValue: 'false',
    },
  },
};

export const Default = {
  args: {
    isBold: false,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum bibendum lorem ac tincidunt. Etiam dolor ex, varius et vestibulum convallis, vulputate id arcu.',
  },
};
