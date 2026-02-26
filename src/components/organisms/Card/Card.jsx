import './Card.css';
import { classNames } from '../../../utils/helpers';
import { Image } from '../../atoms/Image/Image';
import { Heading } from '../../atoms/Heading/Heading';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import { Link } from 'react-router-dom';

/**
 * Card component
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {string} title - Heading content.
 * @param {number} [titleLevel=2] - Level of the title.
 * @param {string} body - Body content.
 * @param {string} [imageSrc] - Default image source. Fallback image if srcSet is used. This is the
 * property needed to add an image to the media object component.
 * @param {string} [imageSrcSet] - String of different image sizes (e.g., "img-sm.jpg 400w,
 * img-lg.jpg 1200w")
 * @param {string} [imageSizes="100vw"] - Layout information (e.g., "(max-width: 600px) 100vw, 50vw").
 * Defaults to 100vw to avoid having to handle all the images sizes attribute manually, but highly
 * recommended for heavy images.
 * @param {string} [imageAlt=""] - Alternative text for the image.
 * @param {string} [to] - Target URL of the card. No link is displayed.
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * <Card
 *   title="Title"
 *   body="Lorem ipsum dolor sit amet"
 *   imageSrc="/assets/images/test-image-md.webp"
 *   to="/"
 * />
 */

export const Card = ({
  className = '',
  title,
  titleLevel,
  body,
  imageSrc,
  imageSrcSet,
  imageSizes,
  imageAlt,
  to,
  ...rest
}) => {
  return (
    <div className={classNames('card focus-like-hover translate-hover', className)} {...rest}>
      {imageSrc && (
        <div className="card__image">
          <Image src={imageSrc} srcSet={imageSrcSet} sizes={imageSizes} alt={imageAlt} />
        </div>
      )}
      <div className="card__text">
        <Heading className="card__heading" level={titleLevel} size={3}>
          {to ? (
            <Link to={to} className="card__link">
              {title}
            </Link>
          ) : (
            title
          )}
        </Heading>
        <Paragraph className="card__paragraph">{body}</Paragraph>
      </div>
    </div>
  );
};
