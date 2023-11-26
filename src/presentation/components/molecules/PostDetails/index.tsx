import React from 'react';
import Box from '@presentation/components/atom/Box';
import { Post } from '@domain/post/entities/post';
import Typography from '@presentation/components/atom/Typography';

type PostDetailsProps = {
    post: Post;
}

const PostDetails: React.FC<PostDetailsProps> = (props) => {
    return (
        <Box
            padding='screenHorizontal'
            gap='s12'>
            <Typography variant='titleS' >{props.post.title}</Typography>
            <Typography variant='bodyS' >{props.post.body}</Typography>
        </Box>
    );
};

export default PostDetails;
