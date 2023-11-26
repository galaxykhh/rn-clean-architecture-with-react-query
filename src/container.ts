
import baseAxios from '@core/network/axios';
import PostRepository from '@domain/post/repository';
import PostRepositoryImpl from '@data/post/repository';
import { PostRemoteDatasource, PostRemoteDatasourceImpl } from '@data/post/datasource/remote-datasource';
import { PostLocalDatasource, PostLocalDatasourceImpl } from '@data/post/datasource/local-datasource';


const postRemoteDatasource: PostRemoteDatasource = new PostRemoteDatasourceImpl(baseAxios);
const postLocalDatasource: PostLocalDatasource = new PostLocalDatasourceImpl();
const postRepository: PostRepository = new PostRepositoryImpl(postRemoteDatasource, postLocalDatasource);

const container = {
    postRepository,
};

export default container;