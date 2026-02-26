import './FooterShowcase.css';
import { Footer } from '../../../components/organisms/Footer/Footer';
import { Heading } from '../../../components/atoms/Heading/Heading';

const footer1Items = [
  {
    heading: 'Elements',
    links: [
      { text: 'Atoms', url: '/atoms' },
      { text: 'Molecules', url: '/molecules' },
      { text: 'Organisms', url: '/organisms' },
      { text: 'Grid', url: '/grid' },
    ],
  },
  {
    heading: 'Test column',
    links: [
      { text: 'Lorem ipsum', url: '/' },
      { text: 'Lorem ipsum', url: '/' },
      { text: 'Lorem ipsum', url: '/' },
    ],
  },
  {
    heading: 'Test column',
    links: [
      {
        text: 'Lorem ipsum',
        url: '/',
      },
      { text: 'Lorem ipsum', url: '/' },
      { text: 'Lorem ipsum', url: '/' },
    ],
  },
  {
    links: [
      { text: 'No heading column', url: '/' },
      { text: 'No heading column', url: '/' },
    ],
  },
];

const footer1Social = [
  {
    url: '/',
    iconHref: '/assets/icons/instagram.svg',
    ariaLabel: 'Instagram (opens in a new tab)',
  },
  { url: '/', iconHref: '/assets/icons/facebook.svg', ariaLabel: 'Facebook (opens in a new tab)' },
  { url: '/', iconHref: '/assets/icons/youtube.svg', ariaLabel: 'YouTube (opens in a new tab)' },
];

const footer2Items = [
  {
    links: [{ text: 'Atoms', url: '/atoms' }],
  },
  {
    links: [{ text: 'Molecules', url: '/molecules' }],
  },
  {
    links: [{ text: 'Organisms', url: '/organisms' }],
  },
  {
    links: [{ text: 'Grid', url: '/grid' }],
  },
];

const footer2Social = [
  {
    url: '/',
    iconHref: '/assets/icons/instagram.svg',
    ariaLabel: 'Instagram (opens in a new tab)',
  },
  { url: '/', iconHref: '/assets/icons/facebook.svg', ariaLabel: 'Facebook (opens in a new tab)' },
  { url: '/', iconHref: '/assets/icons/youtube.svg', ariaLabel: 'YouTube (opens in a new tab)' },
];

export const FooterShowcase = () => {
  return (
    <div className="footer-showcase showcase-item">
      <Heading>Footer</Heading>
      <Heading level={3}>Standard footer</Heading>
      <Footer items={footer1Items} socialMedia={footer1Social} />
      <Heading level={3}>Compact footer</Heading>
      <Footer items={footer2Items} socialMedia={footer2Social} isCompact />
    </div>
  );
};
