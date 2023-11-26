import { Post } from "@domain/post/entities/post";
import NetInfo  from "@react-native-community/netinfo";
import PostRepository from "@domain/post/repository";

import { PostDto } from "../dtos/post";
import { PostRemoteDatasource } from "../datasource/remote-datasource";
import { PostLocalDatasource } from "../datasource/local-datasource";

export default class PostRepositoryImpl implements PostRepository {
    constructor(
        private remoteDatasource: PostRemoteDatasource,
        private localDatasource: PostLocalDatasource,
        private netInfo: typeof NetInfo,
    ) {}

    // Get post list
    public async getList(): Promise<Post[]> {
        try {

            const posts: PostDto[] = (await this.netInfo.fetch()).isConnected
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
            const isConnected = (await this.netInfo.fetch()).isConnected
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