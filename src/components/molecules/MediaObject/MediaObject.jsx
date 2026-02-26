import './MediaObject.css';
import { classNames } from '../../../utils/helpers';
import { Heading } from '../../atoms/Heading/Heading';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import { Image } from '../../atoms/Image/Image';
import { Video } from '../../atoms/Video/Video';

/**
 * Media object component
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {ElementType} [component="div"] - The element to render (e.g., 'section', or 'article').
 * @param {'up' | 'right' | 'down' | 'left' } [mediaLocation="up"] - The location of the media
 * compared to the text.
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
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * <MediaObject
 *   component="section"
 *   mediaLocation="down"
 *   title="Title"
 *   titleLevel={4}
 *   body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla libero, eget convallis tellus consectetur ac"
 *   imageSrc="/assets/images/test-image-md.webp"
 * />
 */

export const MediaObject = ({
  className = '',
  component = 'div',
  mediaLocation = 'up',
  title,
  titleLevel,
  body,
  imageSrc,
  imageSrcSet,
  imageSizes,
  imageAlt,
  videoTitle,
  videoSrc,
  ...rest
}) => {
  const Component = component;
  const validMediaLocations = ['up', 'right', 'down', 'left'];
  const finalMediaLocation = validMediaLocations.includes(mediaLocation) ? mediaLocation : 'up';

  return (
    <Component
      className={classNames('media-object', `media-object--media-${finalMediaLocation}`, className)}
      {...rest}
    >
      <div className="media-object__media">
        {imageSrc && (
          <Image src={imageSrc} srcSet={imageSrcSet} sizes={imageSizes} alt={imageAlt} />
        )}
        {videoSrc && <Video title={videoTitle} src={videoSrc} />}
      </div>
      <div className="media-object__text">
        <Heading className="media-object__heading" level={titleLevel} size={3}>
          {title}
        </Heading>
        <Paragraph className="media-object__paragraph">{body}</Paragraph>
      </div>
    </Component>
  );
};
