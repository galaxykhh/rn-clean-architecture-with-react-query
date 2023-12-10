import { describe, it, expect } from '@jest/globals';
import { Post, PostHelper } from './post';

describe('PostEntity', () => {
    it('PostHelper.hasContent works properly', () => {
        // Arrange
        const post: Post = {
            userId: 1,
            id: 1,
            title: 'post tittle',
            body: '',
        };

        // Assert
        expect(PostHelper.hasContent(post)).toBe(false);
    });
});