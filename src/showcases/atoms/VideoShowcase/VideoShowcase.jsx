import './VideoShowcase.css';
import { Video } from '../../../components/atoms/Video/Video';
import { Heading } from '../../../components/atoms/Heading/Heading';

export const VideoShowcase = () => {
  return (
    <div className="video-showcase showcase-item">
      <Heading>Videos</Heading>
      <div className="stack gap-xl">
        <div className="video-showcase__example">
          <Heading level={3}>Local video</Heading>
          <Video src="/assets/videos/Big_Buck_Bunny_360_10s_1MB.mp4" />
        </div>
        <div className="video-showcase__example">
          <Heading level={3}>YouTube video</Heading>
          <Video title="YouTube testing video" src="https://www.youtube.com/watch?v=G1hKzCkywM8" />
        </div>
        <div className="video-showcase__example">
          <Heading level={3}>Vimeo video</Heading>
          <Video title="Vimeo testing video" src="https://vimeo.com/117079445" />
        </div>
        <div className="video-showcase__example">
          <Heading level={3}>Eager loading video</Heading>
          <Video isEagerLoading src="/assets/videos/Big_Buck_Bunny_360_10s_1MB.mp4" />
        </div>
      </div>
    </div>
  );
};
