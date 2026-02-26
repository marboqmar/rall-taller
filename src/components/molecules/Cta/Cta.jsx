import './Cta.css';
import { classNames } from '../../../utils/helpers';
import { Heading } from '../../atoms/Heading/Heading';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import { Button } from '../../atoms/Button/Button';
import { Link } from 'react-router-dom';
import { Image } from '../../atoms/Image/Image';

/**
 * Call to action component
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {string} title - Heading content.
 * @param {number} [titleLevel=2] - Level of the title.
 * @param {string} body - Body content.
 * @param {string} primaryCtaText - Button content.
 * @param {string} primaryCtaUrl - Target URL.
 * @param {string} secondaryCtaText - Second button content.
 * @param {string} secondaryCtaUrl - Target URL of the second button.
 * @param {string} [imageSrc] - Default image source. Fallback image if srcSet is used. This is the
 * property needed to add an image to the CTA component.
 * @param {string} [imageSrcSet] - String of different image sizes (e.g., "img-sm.jpg 400w,
 * img-lg.jpg 1200w")
 * @param {string} [imageSizes="100vw"] - Layout information (e.g., "(max-width: 600px) 100vw, 50vw").
 * Defaults to 100vw to avoid having to handle all the images sizes attribute manually, but highly
 * recommended for heavy images.
 * @param {string} [imageAlt=""] - Alternative text for the image.
 * @param {object} [rest] - Additional props passed.
 */

export const Cta = ({
  className = '',
  title,
  titleLevel,
  body,
  primaryCtaText,
  primaryCtaUrl,
  secondaryCtaText,
  secondaryCtaUrl,
  imageSrc,
  imageSrcSet,
  imageSizes,
  imageAlt,
  ...rest
}) => {
  return (
    <div className={classNames('cta', { [`cta--with-image`]: imageSrc }, className)} {...rest}>
      <div className="cta__wrapper">
        <div className="cta__text">
          <Heading className="cta__heading" level={titleLevel} size={3}>
            {title}
          </Heading>
          <Paragraph className="cta__paragraph">{body}</Paragraph>
        </div>
        <div className="cta__button-wrapper">
          <Button
            className="cta__button"
            component={Link}
            to={primaryCtaUrl}
            buttonAppearance
            style="primary"
          >
            {primaryCtaText}
          </Button>
          {secondaryCtaText && (
            <Button
              className="cta__button"
              component={Link}
              to={secondaryCtaUrl}
              buttonAppearance
              style="tertiary"
            >
              {secondaryCtaText}
            </Button>
          )}
        </div>
      </div>
      {imageSrc && (
        <div className="cta__image">
          <Image src={imageSrc} srcSet={imageSrcSet} sizes={imageSizes} alt={imageAlt} />
        </div>
      )}
    </div>
  );
};
