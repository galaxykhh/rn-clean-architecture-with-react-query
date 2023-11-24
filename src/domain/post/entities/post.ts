import Copyable from '@core/models/copyable';

export interface PostInterface {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export class Post extends Copyable<Post> implements PostInterface {
    public readonly userId: number;
    public readonly id: number;
    public readonly title: string;
    public readonly body: string;

    constructor(data: PostInterface) {
        super();
        this.userId = data.userId;
        this.id = data.id;
        this.title = data.title;
        this.body = data.body;
    }

    public get hasContent(): boolean {
        return this.body.length >= 1;
    }
}