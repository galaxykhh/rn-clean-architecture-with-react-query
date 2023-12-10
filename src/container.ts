
import baseAxios from '@core/network/axios';
import NetInfo from '@react-native-community/netinfo';
import PostRepository from '@domain/post/repository';
import PostRepositoryImpl from '@data/post/repository';
import { PostRemoteDatasource, PostRemoteDatasourceImpl } from '@data/post/datasource/remote-datasource';


const postRemoteDatasource: PostRemoteDatasource = new PostRemoteDatasourceImpl(baseAxios);
const postRepository: PostRepository = new PostRepositoryImpl(postRemoteDatasource, NetInfo);

const container = {
    postRepository,
};

export default container;