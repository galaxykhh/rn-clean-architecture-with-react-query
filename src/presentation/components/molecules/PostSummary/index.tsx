import React from 'react';
import { TouchableOpacity } from 'react-native';
import Box from '@presentation/components/atom/Box';
import Typography from '@presentation/components/atom/Typography';
import { Post } from '@domain/post/entities/post';

type PostSummaryProps = {
    post: Post;
    onPress?: () => void;
}

const PostSummary: React.FC<PostSummaryProps> = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Box
                paddingHorizontal='s12'
                paddingVertical='s8'>
                <Typography variant='titleS'>{props.post.title}</Typography>
                <Typography
                    variant='bodyS'
                    color='textSecondary'
                    numberOfLines={1}>
                    {props.post.body}
                </Typography>
            </Box>
        </TouchableOpacity>
    );
};

export default PostSummary;
