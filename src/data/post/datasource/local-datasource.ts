import { AxiosInstance } from "axios";
import { PostDto, PostDtoResponse } from "../dtos/post";

export abstract class PostLocalDatasource {
    // Get post list
    public abstract getList(): Promise<PostDto[]>;

    // Get singel post item
    public abstract get(id: number): Promise<PostDto>;
}


export class PostLocalDatasourceImpl implements PostLocalDatasource {
    // TODO: implements local-datasource strategy if necessary (sqlite, realmm etc..)
    // constructor(private client: Realm) {}

    // Get post list
    public async getList(): Promise<PostDto[]> {
        // client.get
        return [];
    }

    // Get singel post item
    public async get(id: number): Promise<PostDto> {
        // TODO: implements local-datasource strategy if necessary (sqlite, realmm etc..)
        // example) client.objectForPrimaryKey<Chapter>('Chapter', id);

        // TODO: implements your custom errors if necessary
        throw new Error('NOT FOUND');
    }
}