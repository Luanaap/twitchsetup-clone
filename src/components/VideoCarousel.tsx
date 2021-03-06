import { Container } from '../styles/components/VideoCarousel';
import { VideoGroupProps } from './VideoGroup';

const VideoCarousel: React.FC<VideoGroupProps> = ({ data }) => {
  let windowWidth = typeof window !== 'undefined' && window.innerWidth;

  return (
    <Container>
      {data && (
        <>
          <iframe
            src={`https://player.twitch.tv/?channel=${data[2].channel.rafaballerinii}&parent=${process.env.NEXT_PUBLIC_BASE_DOMAIN}&muted=true&autoplay=true`}
            height={'100%'}
            width={'100%'}
            title={data[2].channel.rafaballerinii}
            allowFullScreen={true}
          />
          <img
            src={data[0].preview.large}
            width={windowWidth >= 640 ? 640 : windowWidth}
            alt={data[0].channel.rafaballerinii}
          />
          <img
            src={data[1].preview.large}
            width={windowWidth >= 640 ? 640 : windowWidth}
            alt={data[1].channel.rafaballerinii}
          />
        </>
      )}
    </Container>
  );
};

export default VideoCarousel;
