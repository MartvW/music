import AlertBox from '@components/primitives/alertBox/AlertBox';
import useFetchYoutubeVideos from '@hooks/youtubeVideos/useFetchYoutubeVideos';
import { YoutubeType } from '@YoutubeType';
import Video from './components/Video';

const YoutubePage = () => {
    const { youtubeVideos } = useFetchYoutubeVideos();

    return (
        <div className='my-32 md:h-screen h-fit w-full flex justify-center items-center py-24 md:px-24 px-5'>
            <div id='youtube' className='w-full h-full flex justify-center items-center flex-col gap-5'>
                <div className="container md:px-10 md:py-10">
                    <div className="flex flex-col md:flex-row gap-5">
                        {
                            youtubeVideos
                                ? youtubeVideos?.length > 0
                                    ? youtubeVideos?.map((video: YoutubeType) => {
                                        return (
                                            <Video
                                                key={video.id.videoId}
                                                video={video}
                                            />
                                        );
                                    })
                                    : <AlertBox
                                        color='orange'
                                        message='No videos found'
                                    />
                                :
                                <AlertBox
                                    color='red'
                                    message='Something went wrong. Please try again later.'
                                />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YoutubePage;