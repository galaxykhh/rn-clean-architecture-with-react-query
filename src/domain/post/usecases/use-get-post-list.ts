import ReactQueryUtils from "@core/utils/react-query-utils";
import { useQuery } from "@tanstack/react-query";
import PostRepository from "../repository";

export const useGetPostList = (postRepository: PostRepository) => {
    return useQuery({
        queryKey: ReactQueryUtils.buildQueryKey('post', 'list'),
        queryFn: () => postRepository.getList(),
    });
};