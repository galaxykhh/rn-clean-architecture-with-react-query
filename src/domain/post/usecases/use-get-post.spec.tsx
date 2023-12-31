import { describe, it, expect } from '@jest/globals';
import axios from 'axios';
import { renderHook } from '@testing-library/react-hooks';
import { PostRemoteDatasource, PostRemoteDatasourceImpl } from '@data/post/datasources/remote-datasource';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import PostRepositoryImpl from '@data/post/repository';
import { useGetPost } from './use-get-post';

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
const postRepository = new PostRepositoryImpl(postRemoteDatasource);


describe('useGetPost', () => {
    it('works properly', async () => {
        // Arrange & Act
        const { result, waitFor } = renderHook(() => useGetPost(postRepository, 1), { wrapper });

        await waitFor(() => result.current.isSuccess);

        // Assert
        expect(typeof result.current.data?.userId).toBe('number');
        expect(typeof result.current.data?.id).toBe('number');
        expect(typeof result.current.data?.title).toBe('string');
        expect(typeof result.current.data?.body).toBe('string');
    });
});
