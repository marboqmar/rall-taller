import './Video.css';
import { classNames } from '../../../utils/helpers';

/**
 * Video component
 * Can render an iframe or a video tag.
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {string} src - Video source.
 * @param {object} [isEagerLoading] - Sets the loading attribute to "eager".
 * @param {object} [title='Video player'] - Video title for screenreaders.
 * @param {object} [rest] - Additional props passed.
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
