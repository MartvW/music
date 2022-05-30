import { executeGetRequest } from '@api/client';
import { APIPath } from '@routes/appUrls';

export const getYoutubeVideos = async () => {
    const [promise] = executeGetRequest(APIPath.youtubeVideos);
    const result = await promise;
    return result.data;
};