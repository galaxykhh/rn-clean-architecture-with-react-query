import React from 'react';
import Box from '@presentation/components/atom/Box';
import { Post } from '@domain/post/entities/post';
import Typography from '@presentation/components/atom/Typography';
import PostDetails from '@presentation/components/molecules/PostDetails';

type PostDetailsTemplateProps = {
    post: Post;
}

const PostDetailsTemplate: React.FC<PostDetailsTemplateProps> = (props) => {
    return (
        <PostDetails post={props.post} />
    );
};

export default PostDetailsTemplate;
