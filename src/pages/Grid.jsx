import { GridShowcase } from '../showcases/grid/GridShowcase/GridShowcase';
import { Heading } from '../components/atoms/Heading/Heading';
import { Breadcrumbs } from '../components/molecules/Breadcrumbs/Breadcrumbs';

const breadcrumbsInfo = [
  { label: 'Home', href: '/' },
  { label: 'Grid', href: '/grid' },
];

export const Grid = () => {
  return (
    <div className="grid-page showcase-page container">
      <Breadcrumbs items={breadcrumbsInfo} />

      <Heading level={1} className="showcase-page__title">
        Grid
      </Heading>
      <GridShowcase />
    </div>
  );
};
