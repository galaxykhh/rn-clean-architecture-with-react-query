type AppDomain = 'post';
type Format = 'list' | 'item';

export default class ReactQueryUtils {
    public static buildQueryKey(
        domain: AppDomain,
        format?: Format,
        unique?: any,
    ) {
        const queryKey: any[] = [domain];

        if (format) {
            queryKey.push(format);
        }

        if (unique) {
            queryKey.push(unique);
        }

        return queryKey;
    }
}