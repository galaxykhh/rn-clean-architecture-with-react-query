import React from 'react'
import container from 'container';
import { PostDetailsScreenProps } from '@presentation/navigations/MainNavigation';
import { useGetPost } from '@domain/post/usecases/use-get-post';
import LoadingView from '@presentation/components/molecules/LoadingView';
import ErrorView from '@presentation/components/molecules/ErrorView';
import PostDetailsTemplate from './template';

export type PostDetailsScreenParams = {
    postId: number;
}

const PostDetailsScreen: React.FC<PostDetailsScreenProps> = ({ navigation, route }) => {
    const { data: post, status } = useGetPost(container.postRepository, route.params.postId);

    switch(status) {
        case 'pending': {
            return <LoadingView />
        }

        case 'error': {
            return <ErrorView />
        }

        case 'success': {
            return (
                <PostDetailsTemplate post={post} />
            );
        }
    }
};

export default PostDetailsScreen;
