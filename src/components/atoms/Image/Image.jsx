import './Image.css';
import { classNames } from '../../../utils/helpers';

/**
 * Image component
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {string} src - Default image source. Fallback image if srcSet is used.
 * @param {string} [srcSet] - String of different image sizes (e.g., "img-sm.jpg 400w,
 * img-lg.jpg 1200w")
 * @param {string} [sizes="100vw"] - Layout information (e.g., "(max-width: 600px) 100vw, 50vw").
 * Defaults to 100vw to avoid having to handle all the images sizes attribute manually, but highly
 * recommended for heavy images.
 * @param {string} [alt=""] - Alt text (defaults to empty string for decorative images).
 * @param {'lazy' | 'eager'} [loading="lazy"] -
 * 'lazy' (default) uses async decoding.
 * 'eager' uses sync decoding for LCP optimization.
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * // Lazy loading (default)
 * <Image src="/photo.png" alt="Description" />
 * @example
 * // Eager loading (for hero sections)
 * <Image src="/hero.png" loading="eager" alt="Hero image description" />
 * @example
 * // Responsive images
 * <Image
 *   src="/assets/images/test-image-sm.webp"
 *   srcSet="
 *     /assets/images/test-image-sm.webp 400w,
 *     /assets/images/test-image-md.webp 800w,
 *     /assets/images/test-image-lg.webp 1200w
 *   "
 *   sizes="(max-width: 768px) 100vw, 800px"
 * />
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
