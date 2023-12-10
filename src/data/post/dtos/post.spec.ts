import { describe, it, expect } from '@jest/globals';
import { PostDto, PostDtoResponse } from './post';
import { Post } from '@domain/post/entities/post';

describe('PostDto', () => {
    const response: PostDtoResponse = {
        userId: 1,
        id: 1,
        title: 'post title',
        body: 'post body',
    };

    it('constructor works properly', () => {
        // Arrange
        const dto = new PostDto(response);

        // Assert
        expect(dto).toBeInstanceOf(PostDto);
        expect(dto.userId).toBe(response.userId);
        expect(dto.id).toBe(response.id);
        expect(dto.title).toBe(response.title);
        expect(dto.body).toBe(response.body);
    });

    it('toEntity works properly', () => {
        // Arrange
        const dto = new PostDto(response);
        const entity = dto.toEntity();

        // Assert
        expect(entity.userId).toBe(dto.userId);
        expect(entity.id).toBe(dto.id);
        expect(entity.title).toBe(dto.title);
        expect(entity.body).toBe(dto.body);
    });
});