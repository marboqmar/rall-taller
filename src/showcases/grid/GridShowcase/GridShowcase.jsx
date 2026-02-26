import './GridShowcase.css';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { Paragraph } from '../../../components/atoms/Paragraph/Paragraph';

export const GridShowcase = () => {
  return (
    <div className="grid-showcase">
      <div className="grid-showcase__wrapper showcase-item__wrapper">
        {/* Responsive examples */}
        <Heading>Responsive grid layout examples</Heading>
        <div className="grid-showcase__column grid">
          <span className="grid-showcase__element col-span-3 col-span-tablet-6">Half</span>
          <span className="grid-showcase__element col-span-3 col-span-tablet-6">Half</span>
        </div>
        <div className="grid-showcase__column grid">
          <span className="grid-showcase__element col-span-2 col-span-tablet-4">Third</span>
          <span className="grid-showcase__element col-span-2 col-span-tablet-4">Third</span>
          <span className="grid-showcase__element col-span-2 col-span-tablet-4">Third</span>
        </div>
        <div className="grid-showcase__column grid">
          <span className="grid-showcase__element col-span-1 col-span-tablet-2">Sixth</span>
          <span className="grid-showcase__element col-span-1 col-span-tablet-2">Sixth</span>
          <span className="grid-showcase__element col-span-1 col-span-tablet-2">Sixth</span>
          <span className="grid-showcase__element col-span-1 col-span-tablet-2">Sixth</span>
          <span className="grid-showcase__element col-span-1 col-span-tablet-2">Sixth</span>
          <span className="grid-showcase__element col-span-1 col-span-tablet-2">Sixth</span>
        </div>
      </div>
      <div className="grid-showcase__wrapper showcase-item__wrapper">
        {/* Mobile examples */}
        <Heading>Mobile grid layout examples</Heading>
        <Paragraph>On mobile, the grid has 6 columns by default.</Paragraph>
        <div className="grid-showcase__column grid">
          <span className="grid-showcase__element col-span-3">3/6</span>
          <span className="grid-showcase__element col-span-3">3/6</span>
        </div>
        <div className="grid-showcase__column grid">
          <span className="grid-showcase__element col-span-2">2/6</span>
          <span className="grid-showcase__element col-span-2">2/6</span>
          <span className="grid-showcase__element col-span-2">2/6</span>
        </div>
        <div className="grid-showcase__column grid">
          <span className="grid-showcase__element col-span-1">1/6</span>
          <span className="grid-showcase__element col-span-1">1/6</span>
          <span className="grid-showcase__element col-span-1">1/6</span>
          <span className="grid-showcase__element col-span-1">1/6</span>
          <span className="grid-showcase__element col-span-1">1/6</span>
          <span className="grid-showcase__element col-span-1">1/6</span>
        </div>
      </div>

      <div className="grid-showcase__wrapper showcase-item__wrapper">
        {/* Desktop examples */}
        <Heading>Desktop grid layout examples</Heading>
        <Paragraph>
          On desktop, the grid has 12 columns by default. On mobile, the following examples are set
          to occupy the whole grid.
        </Paragraph>
        <div className="grid-showcase__column grid">
          <span className="grid-showcase__element col-span-6 col-span-tablet-6">6/12</span>
          <span className="grid-showcase__element col-span-6 col-span-tablet-6">6/12</span>
        </div>
        <div className="grid-showcase__column grid">
          <span className="grid-showcase__element col-span-6 col-span-tablet-4">4/12</span>
          <span className="grid-showcase__element col-span-6 col-span-tablet-4">4/12</span>
          <span className="grid-showcase__element col-span-6 col-span-tablet-4">4/12</span>
        </div>
        <div className="grid-showcase__column grid">
          <span className="grid-showcase__element col-span-6 col-span-tablet-3">3/12</span>
          <span className="grid-showcase__element col-span-6 col-span-tablet-3">3/12</span>
          <span className="grid-showcase__element col-span-6 col-span-tablet-3">3/12</span>
          <span className="grid-showcase__element col-span-6 col-span-tablet-3">3/12</span>
        </div>
        <div className="grid-showcase__column grid">
          <span className="grid-showcase__element col-span-6 col-span-tablet-2">2/12</span>
          <span className="grid-showcase__element col-span-6 col-span-tablet-2">2/12</span>
          <span className="grid-showcase__element col-span-6 col-span-tablet-2">2/12</span>
          <span className="grid-showcase__element col-span-6 col-span-tablet-2">2/12</span>
          <span className="grid-showcase__element col-span-6 col-span-tablet-2">2/12</span>
          <span className="grid-showcase__element col-span-6 col-span-tablet-2">2/12</span>
        </div>
        <div className="grid-showcase__column grid">
          <span className="grid-showcase__element col-span-6 col-span-tablet-1">1/12</span>
          <span className="grid-showcase__element col-span-6 col-span-tablet-1">1/12</span>
          <span className="grid-showcase__element col-span-6 col-span-tablet-1">1/12</span>
          <span className="grid-showcase__element col-span-6 col-span-tablet-1">1/12</span>
          <span className="grid-showcase__element col-span-6 col-span-tablet-1">1/12</span>
          <span className="grid-showcase__element col-span-6 col-span-tablet-1">1/12</span>
          <span className="grid-showcase__element col-span-6 col-span-tablet-1">1/12</span>
          <span className="grid-showcase__element col-span-6 col-span-tablet-1">1/12</span>
          <span className="grid-showcase__element col-span-6 col-span-tablet-1">1/12</span>
          <span className="grid-showcase__element col-span-6 col-span-tablet-1">1/12</span>
          <span className="grid-showcase__element col-span-6 col-span-tablet-1">1/12</span>
          <span className="grid-showcase__element col-span-6 col-span-tablet-1">1/12</span>
        </div>
      </div>
    </div>
  );
};
