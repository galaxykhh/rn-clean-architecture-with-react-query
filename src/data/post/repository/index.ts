import { Post } from "@domain/post/entities/post";
import PostRepository from "@domain/post/repository";
import { PostRemoteDatasource } from "../datasources/remote-datasource";

export default class PostRepositoryImpl implements PostRepository {
    constructor(
        private remoteDatasource: PostRemoteDatasource,
    ) {}

    // Get post list
    public async getList(): Promise<Post[]> {
        try {
            const posts =  await this.remoteDatasource.getList();

            return posts.map(post => post.toEntity());
        } catch(e) {
            // TODO: implements your custom errors if necessary
            throw e;
        }
    }

    // Get single post item
    public async get(id: number): Promise<Post> {
        try {
            const post = await this.remoteDatasource.get(id)

            return post.toEntity();
        } catch(e) {
            // TODO: implements your custom errors if necessary
            throw e;
        }
    };

}