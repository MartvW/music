import { getInstagramPost } from "@repository/instagramPost/instagramPostRepository";
import { useQuery } from "react-query";

const useFetchInstagramPost = () => {
  const { data, isLoading, isError } = useQuery(
    ["instagramPost"],
    () => getInstagramPost(),
    {
      refetchInterval: 1000 * 60 * 60 * 24,
      refetchOnWindowFocus: false,
    }
  );

  return { instagramPost: data, isLoading, isError };
};

export default useFetchInstagramPost;
