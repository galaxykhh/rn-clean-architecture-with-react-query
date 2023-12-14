import { useQuery } from "@tanstack/react-query";
import PostRepository from "../repository";
import postKeys from "./post-key-factory";

export const useGetPost = (postRepository: PostRepository, id: number) => {
    return useQuery({
        queryKey: postKeys.item(id),
        queryFn: () => postRepository.get(id),
    });
};