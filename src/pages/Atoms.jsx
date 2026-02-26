import '../css/pages/showcase.css';
import { Breadcrumbs } from '../components/molecules/Breadcrumbs/Breadcrumbs';
import { ButtonShowcase } from '../showcases/atoms/ButtonShowcase/ButtonShowcase';
import { Heading } from '../components/atoms/Heading/Heading';
import { IconShowcase } from '../showcases/atoms/IconShowcase/IconShowcase';
import { ImageShowcase } from '../showcases/atoms/ImageShowcase/ImageShowcase';
import { InputShowcase } from '../showcases/atoms/InputShowcase/InputShowcase';
import { ListShowcase } from '../showcases/atoms/ListShowcase/ListShowcase';
import { TextShowcase } from '../showcases/atoms/TextShowcase/TextShowcase';
import { TableShowcase } from '../showcases/atoms/TableShowcase/TableShowcase';
import { VideoShowcase } from '../showcases/atoms/VideoShowcase/VideoShowcase';

const breadcrumbsInfo = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
];

export const Atoms = () => {
  return (
    <div className="atoms-page showcase-page container">
      <Breadcrumbs items={breadcrumbsInfo} />
      <Heading level={1} className="showcase-page__title">
        Atoms
      </Heading>
      <div className="atoms-page__showcase-wrapper showcase-wrapper">
        {/* Button */}
        <ButtonShowcase />

        {/* Icon */}
        <IconShowcase />

        {/* Image */}
        <ImageShowcase />

        {/* Input */}
        <InputShowcase />

        {/* List */}
        <ListShowcase />

        {/* Tables */}
        <TableShowcase />

        {/* Texts */}
        <TextShowcase />

        {/* Video */}
        <VideoShowcase />
      </div>
    </div>
  );
};
