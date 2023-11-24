import React from 'react'
import PostDetailsTemplate from './template';

export type PostDetailsScreenParams = {
    postId: number;
}

const PostDetailsScreen: React.FC = (props) => {
    return (
        <PostDetailsTemplate />
    );
};

export default PostDetailsScreen;
