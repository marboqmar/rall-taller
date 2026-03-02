import { Image } from './Image';

export default {
  title: 'Atoms/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    loading: {
      control: 'inline-radio',
      options: ['lazy', 'eager'],
    },
    src: { control: 'text' },
    alt: { control: 'text' },
  },
};

// 1. Basic usage
export const Default = {
  args: {
    src: 'https://picsum.photos/id/237/800/600',
    alt: 'A cute black dog',
  },
};

export const Hero = {
  args: {
    src: 'https://picsum.photos/id/10/1200/400',
    alt: 'Mountain landscape',
    loading: 'eager',
  },
  parameters: {
    docs: {
      description: {
        story: 'Eager loading',
      },
    },
  },
};

export const Responsive = {
  args: {
    src: 'https://picsum.photos/id/1011/1200/800',
    srcSet: `
      https://picsum.photos/id/1011/400/267 400w,
      https://picsum.photos/id/1011/800/533 800w,
      https://picsum.photos/id/1011/1200/800 1200w
    `,
    sizes: '(max-width: 768px) 100vw, 800px',
    alt: 'A woman in a canoe',
  },
  parameters: {
    docs: {
      description: {
        story: 'Using srcSet',
      },
    },
  },
};

export const Decorative = {
  args: {
    src: 'https://picsum.photos/id/1043/400/400',
    alt: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty alt',
      },
    },
  },
};
