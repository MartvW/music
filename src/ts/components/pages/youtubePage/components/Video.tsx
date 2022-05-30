import { YoutubeType } from '@YoutubeType';

type Props = {
    video: YoutubeType;
};

const Video = ({ video }: Props) => (
    <div className='w-full h-auto'>
        <iframe
            title={video.snippet.title}
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='w-full h-full'
        />
    </div>
);

export default Video;