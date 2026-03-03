import { BurgerButton } from './BurgerButton';

export default {
  title: 'Atoms/Button/BurgerButton',
  component: BurgerButton,
  tags: ['autodocs'],
  argTypes: {
    isExpanded: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    isExpanded: false,
  },
};

export const Expanded = {
  args: {
    isExpanded: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays the button in its active state (useful for checking aria attributes).',
      },
    },
  },
};
