import '../css/pages/showcase.css';
import { Breadcrumbs } from '../components/molecules/Breadcrumbs/Breadcrumbs';
import { Heading } from '../components/atoms/Heading/Heading';
import { BreadcrumbsShowcase } from '../showcases/molecules/BreadcrumbsShowcase/BreadcrumbsShowcase';
import { CtaShowcase } from '../showcases/molecules/CtaShowcase/CtaShowcase';
import { FormShowcase } from '../showcases/molecules/FormShowcase/FormShowcase';
import { MediaObjectShowcase } from '../showcases/molecules/MediaObjectShowcase/MediaObjectShowcase';
import { SearchBoxShowcase } from '../showcases/molecules/SearchBoxShowcase/SearchBoxShowcase';
import { StatusMessageShowcase } from '../showcases/molecules/StatusMessageShowcase/StatusMessageShowcase';

const breadcrumbsInfo = [
  { label: 'Home', href: '/' },
  { label: 'Molecules', href: '/molecules' },
];

export const Molecules = () => {
  return (
    <div className="molecules-page showcase-page container">
      <Breadcrumbs items={breadcrumbsInfo} />
      <Heading level={1} className="showcase-page__title">
        Molecules
      </Heading>
      <div className="molecules-page__showcases-wrapper showcase-wrapper">
        {/* Breadcrumbs */}
        <BreadcrumbsShowcase />

        {/* CTA */}
        <CtaShowcase />

        {/* Form */}
        <FormShowcase />

        {/* Media object */}
        <MediaObjectShowcase />

        {/* Search box */}
        <SearchBoxShowcase />

        {/* Status message */}
        <StatusMessageShowcase />
      </div>
    </div>
  );
};
