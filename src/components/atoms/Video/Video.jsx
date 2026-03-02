import './Video.css';
import { classNames } from '../../../utils/helpers';
import PropTypes from 'prop-types';

/**
 * Video component
 *
 * Can render an iframe or a video tag.
 *
 * Supports all standard HTML heading attributes via `...rest`.
 *
 * @example
 * ```jsx
 * <Video src="/assets/videos/Big_Buck_Bunny_360_10s_1MB.mp4" />
 * ```
 *
 * @example
 * Youtube eager loading video
 * ```jsx
 * <Video title="YouTube testing video" isEagerLoading src="https://www.youtube.com/watch?v=G1hKzCkywM8" />
 * ```
 *
 * @example
 * Vimeo video
 * ```jsx
 * <Video title="Vimeo testing video" src="https://vimeo.com/117079445" />
 * ```
 */

export const Video = ({ className = '', src, isEagerLoading, title = 'Video player', ...rest }) => {
  const isExternalVideo = src.includes('youtu') || src.includes('vimeo');

  // Convert standard YouTube and Vimeo links to embed links
  const getEmbedUrl = url => {
    if (!url) return '';

    // Handle YouTube with Privacy-Enhanced Mode to avoid cookies
    if (url.includes('youtube.com/watch?v=') || url.includes('youtu.be/')) {
      let id = '';
      if (url.includes('watch?v=')) {
        id = url.split('v=')[1]?.split('&')[0] || '';
      } else {
        id = url.split('/').pop();
      }
      // Using youtube-nocookie.com instead of youtube.com
      return `https://www.youtube-nocookie.com/embed/${id}`;
    }

    // Handle Vimeo
    if (url.includes('vimeo.com/') && !url.includes('player.vimeo.com')) {
      const vimeoId = url.split('/').pop();
      return `https://player.vimeo.com/video/${vimeoId}`;
    }

    return url;
  };

  /* If it is an external video, use iframe */
  if (isExternalVideo) {
    return (
      <iframe
        className={classNames('video video--external', className)}
        src={getEmbedUrl(src)}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading={isEagerLoading ? 'eager' : 'lazy'}
        referrerPolicy="strict-origin-when-cross-origin"
        {...rest}
      ></iframe>
    );
  }

  /* If it is a local video, use the video tag */
  return (
    <video
      className={classNames('video video--local', className)}
      preload={isEagerLoading ? 'auto' : 'metadata'}
      controls
      {...rest}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

Video.propTypes = {
  /** Additional CSS classes */
  className: PropTypes.string,

  /** The source URL of the video. Supports YouTube, Vimeo, and local MP4 links */
  src: PropTypes.string.isRequired,

  /** If true, sets iframe loading to "eager" */
  isEagerLoading: PropTypes.bool,

  /** Accessible title used for the iframe title attribute */
  title: PropTypes.string,
};
