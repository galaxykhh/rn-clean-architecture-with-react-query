import { AxiosInstance } from "axios";
import { PostDto, PostDtoResponse } from "../dtos/post";

export abstract class PostRemoteDatasource {
    // Get post list
    public abstract getList(): Promise<PostDto[]>;

    // Get singel post item
    public abstract get(id: number): Promise<PostDto>;
}


export class PostRemoteDatasourceImpl implements PostRemoteDatasource {
    private readonly path = '/posts'; 
    constructor(private client: AxiosInstance) {}

    // Get post list
    public async getList(): Promise<PostDto[]> {
        try {
            const { data } = await this.client.get<PostDtoResponse[]>(this.path);
            const posts = data.map(d => new PostDto(d));
    
            return posts;
        } catch(e) {
            // TODO: implements your custom errors if necessary
            throw e;
        }
    }

    // Get singel post item
    public async get(id: number): Promise<PostDto> {
        try {
            const { data } = await this.client.get<PostDtoResponse>(`${this.path}/${id}`);
            const post = new PostDto(data);
    
            return post;
        } catch(e) {
            // TODO: implements your custom errors if necessary
            throw e;
        }
    }
}