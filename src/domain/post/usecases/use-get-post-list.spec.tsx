import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { jest, describe, it, expect } from '@jest/globals';
import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import { renderHook } from '@testing-library/react-hooks';
import { PostLocalDatasource, PostLocalDatasourceImpl } from '@data/post/datasource/local-datasource';
import { PostRemoteDatasource, PostRemoteDatasourceImpl } from '@data/post/datasource/remote-datasource';
import PostRepositoryImpl from '@data/post/repository';
import { useGetPostList } from './use-get-post-list';
import { Post } from '../entities/post';

jest.mock('@react-native-community/netinfo', () => ({
    fetch: jest.fn(async () => Promise.resolve({
        isConnected: true,
    })),
}));

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            gcTime: Infinity,
        }
    }
});

const wrapper: React.FC<PropsWithChildren> = ({ children }) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
);

// TODO: mock or wrap your axios client if necessary
const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

const postRemoteDatasource: PostRemoteDatasource = new PostRemoteDatasourceImpl(client);
const postLocalDatasource: PostLocalDatasource = new PostLocalDatasourceImpl();
const postRepository = new PostRepositoryImpl(postRemoteDatasource, postLocalDatasource, NetInfo);


describe('useGetPostList', () => {
    it('works properly', async () => {
        // Arrange & Act
        const { result, waitFor } = renderHook(() => useGetPostList(postRepository), { wrapper });

        await waitFor(() => result.current.isSuccess);

        // Assert
        expect(Array.isArray(result.current.data)).toBe(true);
        result.current.data?.forEach(post => {
            expect(post).toBeInstanceOf(Post);
            expect(typeof post.userId).toBe('number');
            expect(typeof post.id).toBe('number');
            expect(typeof post.title).toBe('string');
            expect(typeof post.body).toBe('string');
        });
    });
});
