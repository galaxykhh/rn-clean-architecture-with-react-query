import { Post } from "@domain/post/entities/post";
import NetInfo  from "@react-native-community/netinfo";
import PostRepository from "@domain/post/repository";

import { PostDto } from "../dtos/post";
import { PostRemoteDatasource } from "../datasource/remote-datasource";

export default class PostRepositoryImpl implements PostRepository {
    constructor(
        private remoteDatasource: PostRemoteDatasource,
        private netInfo: typeof NetInfo,
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