import React from 'react';
import Box from '@presentation/components/atom/Box';
import { Post } from '@domain/post/entities/post';
import Typography from '@presentation/components/atom/Typography';

type PostsTemplateProps = {
    posts: Post[];
}

const PostsTemplate: React.FC<PostsTemplateProps> = (props) => {
    return (
        <Box>
            <Typography variant='bodyS'>{props.posts.length}</Typography>
        </Box>
    );
};

export default PostsTemplate;
