import NetInfo from '@react-native-community/netinfo';

export default class BaseRepository {
    private netInfo = NetInfo;

    protected async isConnected(): Promise<boolean | null> {
        return (await this.netInfo.fetch()).isConnected;
    }
}