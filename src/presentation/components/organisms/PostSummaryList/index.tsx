import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { Post } from '@domain/post/entities/post';
import Box from '@presentation/components/atom/Box';
import PostSummary from '@presentation/components/molecules/PostSummary';

type PostSummaryListProps = {
    posts: Post[];
    onPostPress?: (post: Post) => void;
}

const PostSummaryList: React.FC<PostSummaryListProps> = (props) => {
    const renderItem = useCallback(({ item }: { item: Post }) => {
        return (
            <PostSummary
                post={item}
                onPress={() => props.onPostPress?.(item)}
            />
        );
    }, []);

    const renderSeparator = useCallback(() => {
        return (
            <Box
                height={1}
                backgroundColor='background01'
            />
        );
    }, []);

    return (
        <FlatList
            data={props.posts}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            ItemSeparatorComponent={renderSeparator}
        />
    );
};

export default PostSummaryList;
