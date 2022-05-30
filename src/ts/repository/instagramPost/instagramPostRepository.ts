import { executeGetRequest } from '@api/client';
import { APIPath } from '@routes/appUrls';

export const getInstagramPost = async () => {
    const [promise] = executeGetRequest(APIPath.instagramPost);
    const result = await promise;
    return result.data;
};