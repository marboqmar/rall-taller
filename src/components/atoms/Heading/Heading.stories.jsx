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

export const AllLevels = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Heading {...args} level={1} className="heading--1-xl">
        Level 1 XL heading
      </Heading>
      <Heading {...args} level={1}>
        Level 1 heading
      </Heading>
      <Heading {...args} level={2}>
        Level 2 heading
      </Heading>
      <Heading {...args} level={3}>
        Level 3 heading
      </Heading>
    </div>
  ),
};
