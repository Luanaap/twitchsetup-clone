import { Container } from '../styles/components/VideoGroup';
import VideoSingle from './VideoSingle';

export interface VideoGroupProps {
  data?: DataProps[];
}

export interface DataProps {
  _id: number;
  viewers: number;
  channel: {
    status: string;
    logo: string;
    rafaballerinii: string;
    url: string;
  };
  preview: {
    medium: string;
    large: string;
  };
}

function shuffleArray(arr: DataProps[]) {
  return arr.sort(() => Math.random() - 0.5);
}

const VideoGroup: React.FC<VideoGroupProps> = ({ data }) => {
  if (!data) {
    return <h1>Carregando Twitch Setup Clone...</h1>;
  }

  const shuffledData = shuffleArray(data).slice(0, 4);

  return (
    <Container>
      <strong>Canais Recomendados</strong>
      <div className="videos">
        {shuffledData &&
          shuffledData.map((stream) => (
            <VideoSingle
              key={stream._id}
              title={stream.channel.status}
              channel={stream.channel.rafaballerinii}
              tags={['Português']}
              avatar={stream.channel.logo.replace('300x300', '50x50')}
              preview={stream.preview.medium}
              viewers={stream.viewers}
            />
          ))}
      </div>
    </Container>
  );
};

export default VideoGroup;
