import { describe, it, expect } from '@jest/globals';
import { Post, PostInterface } from './post';

describe('PostEntity', () => {
    it('constructor works properly', () => {
        // Arrange
        const data: PostInterface = {
            userId: 1,
            id: 1,
            title: 'post tittle',
            body: 'post body',
        };

        const post = new Post(data);

        // Assert
        expect(post).toBeInstanceOf(Post);
        expect(post.userId).toBe(data.userId);
        expect(post.id).toBe(data.id);
        expect(post.title).toBe(data.title);
        expect(post.body).toBe(data.body);
    });

    it('hasContent getter works properly', () => {
        // Arrange
        const data: PostInterface = {
            userId: 1,
            id: 1,
            title: 'post tittle',
            body: '',
        };

        const post = new Post(data);

        // Assert
        expect(post.hasContent).toBe(false);
    });
});