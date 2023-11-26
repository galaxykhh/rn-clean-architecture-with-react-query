import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Post } from '@domain/post/entities/post';
import PostSummaryList from '@presentation/components/organisms/PostSummaryList';
import { MainStackNavigationProps } from '@presentation/navigations/MainNavigation';

type PostsTemplateProps = {
    posts: Post[];
}

const PostsTemplate: React.FC<PostsTemplateProps> = (props) => {
    const { push } = useNavigation<MainStackNavigationProps>();

    const handlePressPost = useCallback((post: Post) => {
        push('PostDetails', { postId: post.id });
    }, []);

    return (
        <PostSummaryList
            posts={props.posts}
            onPostPress={handlePressPost}
        />
    );
};

export default PostsTemplate;
