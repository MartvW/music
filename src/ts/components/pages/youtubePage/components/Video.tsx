import { YoutubeType } from '@YoutubeType';

type Props = {
    video: YoutubeType;
};

const Video = ({ video }: Props) => (
    <div
        className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden md:h-[650px] h-[250px] "
    >
        <iframe
            title={video.snippet.title}
            className="border-4 embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            allowFullScreen
            data-gtm-yt-inspected-2340190_699="true"
            id="240632615"
        />
    </div>

);

export default Video;