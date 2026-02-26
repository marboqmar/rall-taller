import { Breadcrumbs } from '../../../components/molecules/Breadcrumbs/Breadcrumbs';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { Paragraph } from '../../../components/atoms/Paragraph/Paragraph';

const breadcrumbsInfo = [
  { label: 'Home', href: '/' },
  { label: 'Molecules', href: '/molecules' },
  { label: 'Breadcrumbs', href: '/molecules/breadcrumbs' },
];

const breadcrumbsWithIconInfo = [
  { label: 'Home', href: '/', hasHomeIcon: true },
  { label: 'Molecules', href: '/molecules' },
  { label: 'Breadcrumbs', href: '/molecules/breadcrumbs' },
];

export const BreadcrumbsShowcase = () => {
  return (
    <div className="breadcrumbs-showcase showcase-item">
      <Heading>Breadcrumbs</Heading>
      <Paragraph>
        The following breadbrums are built using an array of objects to fill its data.
      </Paragraph>
      <Heading level={3}>Breadbrumbs with home icon</Heading>
      <Breadcrumbs items={breadcrumbsWithIconInfo} />

      <Heading level={3}>Breadbrumbs without home icon</Heading>
      <Breadcrumbs items={breadcrumbsInfo} />
    </div>
  );
};
