import { Heading } from './Heading';

export default {
  title: 'Atoms/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3],
    },
    size: {
      control: { type: 'select' },
      options: [1, 2, 3],
    },
  },
};

export const Default = {
  args: {
    level: 1,
    children: 'The quick brown fox jumps over the lazy dog.',
  },
};

export const H1xl = {
  name: 'H1 XL variant',
  args: {
    level: 1,
    children: 'The quick brown fox jumps over the lazy dog.',
    className: 'heading--1-xl',
  },
};
