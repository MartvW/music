import { getYoutubeVideos } from "@repository/youtubeVideos/youtubeVideosRepository";
import { useQuery } from "react-query";

const useFetchYoutubeVideos = () => {
  const { data, isLoading, isError } = useQuery(
    ["youtubeVideos"],
    () => getYoutubeVideos(),
    {
      refetchInterval: 1000 * 60 * 60 * 24,
      refetchOnWindowFocus: false,
    }
  );

  return { youtubeVideos: data, isLoading, isError };
};

export default useFetchYoutubeVideos;
