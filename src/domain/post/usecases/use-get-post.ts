import ReactQueryUtils from "@core/utils/react-query-utils";
import { useQuery } from "@tanstack/react-query";
import PostRepository from "../repository";

export const useGetPost = (postRepository: PostRepository, id: number) => {
    return useQuery({
        queryKey: ReactQueryUtils.buildQueryKey('post', 'item', id),
        queryFn: () => postRepository.get(id),
    });
};