import React, { useCallback } from 'react'
import container from 'container';
import { useGetPostList } from '@domain/post/usecases/use-get-post-list';
import Typography from '@presentation/components/atom/Typography';
import { Post } from '@domain/post/entities/post';

import PostsTemplate from './template';
import { PostsScreenProps } from '@presentation/navigations/MainNavigation';


const PostsScreen: React.FC<PostsScreenProps> = ({ navigation }) => {
    const { data, status } = useGetPostList(container.postRepository);

    switch(status) {
        case 'pending': {
            return <Typography>Loading View</Typography>;
        }

        case 'error': {
            return <Typography>Error View</Typography>;
        }

        case 'success': {
            return <PostsTemplate posts={data} />;
        }
    }
};

export default PostsScreen;
