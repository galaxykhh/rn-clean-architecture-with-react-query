import ReactQueryUtils from "@core/utils/react-query-utils";

const postKeys = {
    all: ReactQueryUtils.buildQueryKey('post'),
    list: ReactQueryUtils.buildQueryKey('post', 'list'),
    item: (id: number) => ReactQueryUtils.buildQueryKey('post', 'item', id),
};

export default postKeys;