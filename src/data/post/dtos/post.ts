import BaseDto from "@core/models/base-dto";
import { Post } from "@domain/post/entities/post";

export interface PostDtoResponse {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export class PostDto implements BaseDto<Post> {
    public readonly userId: number;
    public readonly id: number;
    public readonly title: string;
    public readonly body: string;

    constructor(response: PostDtoResponse) {
        this.userId = response.userId;
        this.id = response.id;
        this.title = response.title;
        this.body = response.body;
    }

    public toEntity(): Post {
        return {
            userId: this.userId,
            id: this.id,
            title: this.title,
            body: this.body,
        };
    }
}