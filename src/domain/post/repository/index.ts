import { Post } from "../entities/post";

export default abstract class PostRepository {
    // Get post list
    public abstract getList(): Promise<Post[]>;

    // Get single post item
    public abstract get(id: number): Promise<Post>;
}