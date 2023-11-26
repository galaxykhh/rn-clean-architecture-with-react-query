import { Post } from "@domain/post/entities/post";
import NetInfo  from "@react-native-community/netinfo";
import PostRepository from "@domain/post/repository";

import { PostDto } from "../dtos/post";
import { PostRemoteDatasource } from "../datasource/remote-datasource";
import { PostLocalDatasource } from "../datasource/local-datasource";
import BaseRepository from "@core/models/base-repository";

export default class PostRepositoryImpl extends BaseRepository implements PostRepository {
    constructor(
        private remoteDatasource: PostRemoteDatasource,
        private localDatasource: PostLocalDatasource,
    ) {
        super();
    }

    // Get post list
    public async getList(): Promise<Post[]> {
        try {

            const posts: PostDto[] = await this.isConnected()
                ? await this.remoteDatasource.getList()
                : await this.localDatasource.getList();

            return posts.map(p => p.toEntity());
        } catch(e) {
            // TODO: implements your custom errors if necessary
            throw e;
        }
    }

    // Get single post item
    public async get(id: number): Promise<Post> {
        try {
            const isConnected = await this.isConnected()
            const post: PostDto = isConnected
                ? await this.remoteDatasource.get(id)
                : await this.localDatasource.get(id);

            return post.toEntity();
        } catch(e) {
            // TODO: implements your custom errors if necessary
            throw e;
        }
    };

}