import React from 'react';
import Box from '@presentation/components/atom/Box';
import { Post } from '@domain/post/entities/post';
import Typography from '@presentation/components/atom/Typography';

type PostDetailsTemplateProps = {
    post: Post;
}

const PostDetailsTemplate: React.FC<PostDetailsTemplateProps> = (props) => {
    return (
        <Box>
            <Typography>{props.post.title}</Typography>
        </Box>
    );
};

export default PostDetailsTemplate;
