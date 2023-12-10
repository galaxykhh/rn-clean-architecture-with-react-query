
import baseAxios from '@core/network/axios';
import PostRepository from '@domain/post/repository';
import PostRepositoryImpl from '@data/post/repository';
import { PostRemoteDatasource, PostRemoteDatasourceImpl } from '@data/post/datasource/remote-datasource';

// TODO: use di tool (like tsyringe, inversify) if necessary

const postRemoteDatasource: PostRemoteDatasource = new PostRemoteDatasourceImpl(baseAxios);
const postRepository: PostRepository = new PostRepositoryImpl(postRemoteDatasource);

const container = {
    postRepository,
};

export default container;