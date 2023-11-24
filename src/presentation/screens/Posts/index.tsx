import React from 'react'
import container from 'container';
import PostsTemplate from './template';
import { useGetPostList } from '@domain/post/usecases/use-get-post-list';
import Typography from '@presentation/components/atom/Typography';


const PostsScreen: React.FC = (props) => {
    const {
        data,
        status,
    } = useGetPostList(container.postRepository);

    switch(status) {
        case 'pending': {
            return <Typography>Loading View</Typography>
        }

        case 'error': {
            return <Typography>Error View</Typography>
        }

        case 'success': {
            return <PostsTemplate posts={data} />
        }
    }
};

export default PostsScreen;
