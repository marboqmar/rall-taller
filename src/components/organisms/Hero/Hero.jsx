import './Hero.css';
import { classNames } from '../../../utils/helpers';
import { Heading } from '../../atoms/Heading/Heading';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import { Image } from '../../atoms/Image/Image';
import { Video } from '../../atoms/Video/Video';
import { Button } from '../../atoms/Button/Button';
import { Link } from 'react-router-dom';

/**
 * Hero component
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {'up' | 'right' | 'down' | 'left' } [mediaLocation="up"] - The location of the media
 * compared to the text.
 * @param {string} title - Heading content.
 * @param {number} [titleLevel=1] - Level of the title.
 * @param {string} body - Body content.
 * @param {string} primaryCtaText - Button content.
 * @param {string} primaryCtaUrl - Target URL.
 * @param {string} secondaryCtaText - Second button content.
 * @param {string} secondaryCtaUrl - Target URL of the second button.
 * @param {string} [imageSrc] - Default image source. Fallback image if srcSet is used. This is the
 * property needed to add an image to the hero.
 * @param {string} [imageSrcSet] - String of different image sizes (e.g., "img-sm.jpg 400w,
 * img-lg.jpg 1200w")
 * @param {string} [imageSizes="100vw"] - Layout information (e.g., "(max-width: 600px) 100vw, 50vw").
 * Defaults to 100vw to avoid having to handle all the images sizes attribute manually, but highly
 * recommended for heavy images.
 * @param {string} [imageAlt=""] - Alternative text for the image.
 * @param {object} [rest] - Additional props passed.
 *
 * @example

 */

export const Hero = ({
  className = '',
  mediaLocation = 'up',
  title,
  titleLevel = 1,
  body,
  primaryCtaText,
  primaryCtaUrl,
  secondaryCtaText,
  secondaryCtaUrl,
  imageSrc,
  imageSrcSet,
  imageSizes,
  imageAlt,
  videoTitle,
  videoSrc,
  ...rest
}) => {
  const validMediaLocations = ['up', 'right', 'down', 'left'];
  const finalMediaLocation = validMediaLocations.includes(mediaLocation) ? mediaLocation : 'up';

  return (
    <section
      className={classNames('hero', `hero--media-${finalMediaLocation}`, className)}
      {...rest}
    >
      <div className="hero__wrapper">
        <div className="hero__text">
          <Heading className="hero__heading" level={titleLevel}>
            {title}
          </Heading>
          {body && <Paragraph className="hero__paragraph">{body}</Paragraph>}
        </div>
        {primaryCtaText && (
          <div className="hero__button-wrapper">
            <Button
              className="hero__button"
              component={Link}
              to={primaryCtaUrl}
              buttonAppearance
              style="primary"
            >
              {primaryCtaText}
            </Button>
            {secondaryCtaText && (
              <Button
                className="hero__button"
                component={Link}
                to={secondaryCtaUrl}
                buttonAppearance
                style="tertiary"
              >
                {secondaryCtaText}
              </Button>
            )}
          </div>
        )}
      </div>
      {(imageSrc || videoSrc) && (
        <div className="hero__media">
          {imageSrc && (
            <Image
              src={imageSrc}
              srcSet={imageSrcSet}
              sizes={imageSizes}
              alt={imageAlt}
              loading="eager"
            />
          )}
          {videoSrc && <Video title={videoTitle} src={videoSrc} isEagerLoading />}
        </div>
      )}
    </section>
  );
};
