import { Cta } from '../../../components/molecules/Cta/Cta';
import { Heading } from '../../../components/atoms/Heading/Heading';

export const CtaShowcase = () => {
  return (
    <div className="cta-showcase showcase-item">
      <Heading>Call to action</Heading>
      <div className="cta-showcase__wrapper showcase-item__wrapper">
        <Cta
          title="Regular CTA"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla 
        libero, eget convallis tellus consectetur ac"
          primaryCtaText="Find out more"
          primaryCtaUrl="/molecules"
        />
        <Cta
          title="CTA with heading level 3"
          titleLevel={3}
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla 
        libero, eget convallis tellus consectetur ac"
          primaryCtaText="Find out more"
          primaryCtaUrl="/molecules"
        />
        <Cta
          title="CTA with two buttons"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla 
        libero, eget convallis tellus consectetur ac"
          primaryCtaText="Find out more"
          primaryCtaUrl="/molecules"
          secondaryCtaText="Contact us"
          secondaryCtaUrl="/molecules"
        />
        <Cta
          title="CTA with image"
          body="This CTA image is on top of the text on mobile and to the right on desktop"
          primaryCtaText="Find out more"
          primaryCtaUrl="/molecules"
          secondaryCtaText="Contact us"
          secondaryCtaUrl="/molecules"
          imageSrc="/assets/images/test-image-md.webp"
        />
      </div>
    </div>
  );
};
