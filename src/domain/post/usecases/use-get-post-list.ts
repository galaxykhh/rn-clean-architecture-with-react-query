import { useQuery } from "@tanstack/react-query";
import PostRepository from "../repository";
import postKeys from "./post-key-factory";

export const useGetPostList = (postRepository: PostRepository) => {
    return useQuery({
        queryKey: postKeys.list,
        queryFn: () => postRepository.getList(),
    });
};