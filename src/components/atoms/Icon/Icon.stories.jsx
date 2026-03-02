import { Icon } from './Icon';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    viewBox: {
      control: 'text',
    },
    isDecorative: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    href: 'assets/icons/solid-circle.svg',
    isDecorative: true,
  },
};
