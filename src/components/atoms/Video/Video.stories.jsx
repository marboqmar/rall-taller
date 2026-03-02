import { Video } from './Video';

export default {
  title: 'Atoms/Video',
  component: Video,
  tags: ['autodocs'],
  argTypes: {
    isEagerLoading: {
      control: 'boolean',
    },
    src: {
      control: 'text',
    },
  },
};

export const YouTube = {
  args: {
    src: '//www.youtube.com/watch?v=HZ8VF0EdITk&pp=ygUrNEsgNjBmcHMgSERSIERvbGJ5IFZpc2lvbiA0SyBWaWRlbyBVTFRSQSBIRA%3D%3D',
    title: 'Beautiful nature scene',
    isEagerLoading: false,
  },
};

export const Vimeo = {
  args: {
    src: 'https://vimeo.com/117079445',
    title: 'Vimeo cinematic video',
    isEagerLoading: false,
  },
};

export const EagerLoading = {
  args: {
    src: '//www.youtube.com/watch?v=HZ8VF0EdITk&pp=ygUrNEsgNjBmcHMgSERSIERvbGJ5IFZpc2lvbiA0SyBWaWRlbyBVTFRSQSBIRA%3D%3D',
    title: 'Eager loaded video',
    isEagerLoading: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Eager loading',
      },
    },
  },
};
