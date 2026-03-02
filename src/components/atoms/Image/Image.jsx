import './Image.css';
import { classNames } from '../../../utils/helpers';
import PropTypes from 'prop-types';

/**
 * Image component
 *
 * Supports all standard HTML image attributes via `...rest`.
 *
 * @example
 * Lazy loading (default)
 * ```jsx
 * <Image src="/photo.png" alt="Description" />
 * ```
 *
 * @example
 * Eager loading (for hero sections)
 * ```jsx
 * <Image src="/hero.png" loading="eager" alt="Hero image description" />
 * ```
 *
 * @example
 * Responsive images
 * ```jsx
 * <Image
 *   src="/assets/images/test-image-sm.webp"
 *   srcSet="
 *     /assets/images/test-image-sm.webp 400w,
 *     /assets/images/test-image-md.webp 800w,
 *     /assets/images/test-image-lg.webp 1200w
 *   "
 *   sizes="(max-width: 768px) 100vw, 800px"
 * />
 * ```
 */

export const Image = ({
  className = '',
  src,
  srcSet,
  sizes = '100vw',
  alt = '',
  loading = 'lazy',
  ...rest
}) => {
  const isLazyLoading = loading === 'lazy';
  const decodingStrategy = isLazyLoading ? 'async' : 'sync';
  const fetchStrategy = isLazyLoading ? 'auto' : 'high';

  return (
    <img
      className={classNames('image', className)}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={loading}
      decoding={decodingStrategy}
      fetchPriority={fetchStrategy}
      {...rest}
    />
  );
};

Image.propTypes = {
  /** Additional CSS classes */
  className: PropTypes.string,

  /** Default image source */
  src: PropTypes.string.isRequired,

  /** Responsive image sources (e.g., "img-400.jpg 400w, img-800.jpg 800w") */
  srcSet: PropTypes.string,

  /** Layout information for responsive images (e.g., "(max-width: 600px) 100vw, 50vw"). Defaults to 100vw, but highly recommended to set it for heavy images */
  sizes: PropTypes.string,

  /** Alt text for accessibility. Provide an empty string for decorative images. */
  alt: PropTypes.string,

  /** 'lazy' (default) for deferred loading and 'eager' for high-priority above-the-fold content.
   */
  loading: PropTypes.oneOf(['lazy', 'eager']),
};
