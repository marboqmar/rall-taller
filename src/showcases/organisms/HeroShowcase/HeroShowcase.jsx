import './HeroShowcase.css';
import { Hero } from '../../../components/organisms/Hero/Hero';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { Paragraph } from '../../../components/atoms/Paragraph/Paragraph';

export const HeroShowcase = () => {
  return (
    <div className="hero-showcase showcase-item">
      <Heading>Hero</Heading>
      <Paragraph>
        The following hero components display their media on different positions, according to the
        value of the property <code>mediaLocation</code>.<br />
        On mobile, the media is always displayed below the text unless "up" was stated as the{' '}
        <code>mediaLocation</code>.<br />
        The media displayed in the hero is loaded eagerly.
      </Paragraph>
      <div className="stack gap-xl">
        <div className="hero-showcase__example showcase-item__example">
          <Heading level={3}>Image up</Heading>
          <Hero
            mediaLocation="up"
            title="Lorem ipsum dolor"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla libero, eget convallis tellus consectetur ac"
            imageSrc="/assets/images/test-image-md.webp"
            imageAlt="Testing image displaying on top of the text"
            primaryCtaText="Find out more"
            primaryCtaUrl="/molecules"
            secondaryCtaText="Contact us"
            secondaryCtaUrl="/molecules"
          />
        </div>
        <div className="hero-showcase__example showcase-item__example">
          <Heading level={3}>Image right</Heading>
          <Hero
            mediaLocation="right"
            title="Lorem ipsum dolor"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla libero, eget convallis tellus consectetur ac"
            imageSrc="/assets/images/test-image-md.webp"
            imageAlt="Testing image displaying to the right of the text"
            primaryCtaText="Find out more"
            primaryCtaUrl="/molecules"
            secondaryCtaText="Contact us"
            secondaryCtaUrl="/molecules"
          />
        </div>
        <div className="hero-showcase__example showcase-item__example">
          <Heading level={3}>Image down, no paragraph and only one CTA</Heading>
          <Hero
            mediaLocation="down"
            title="Lorem ipsum dolor"
            imageSrc="/assets/images/test-image-md.webp"
            imageAlt="Testing image displaying below the text"
            primaryCtaText="Find out more"
            primaryCtaUrl="/molecules"
          />
        </div>
        <div className="hero-showcase__example showcase-item__example">
          <Heading level={3}>Image left and no CTAs</Heading>
          <Hero
            mediaLocation="left"
            title="Lorem ipsum dolor"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla libero, eget convallis tellus consectetur ac"
            imageSrc="/assets/images/test-image-md.webp"
            imageAlt="Testing image displaying to the left of the text"
          />
        </div>
        <div className="hero-showcase__example showcase-item__example">
          <Heading level={3}>Video</Heading>
          <Hero
            mediaLocation="left"
            title="Lorem ipsum dolor"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla libero, eget convallis tellus consectetur ac"
            primaryCtaText="Find out more"
            primaryCtaUrl="/molecules"
            secondaryCtaText="Contact us"
            secondaryCtaUrl="/molecules"
            videoTitle="YouTube test video for Media Object"
            videoSrc="https://www.youtube.com/watch?v=G1hKzCkywM8"
          />
        </div>
        <div className="hero-showcase__example showcase-item__example">
          <Heading level={3}>No media</Heading>
          <Hero
            title="Lorem ipsum dolor"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla libero, eget convallis tellus consectetur ac"
            primaryCtaText="Find out more"
            primaryCtaUrl="/molecules"
            secondaryCtaText="Contact us"
            secondaryCtaUrl="/molecules"
          />
        </div>
      </div>
    </div>
  );
};
