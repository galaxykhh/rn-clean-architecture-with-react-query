import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { getItem, setItem, removeItem } from './storage';

const storage = {
    getItem,
    setItem,
    removeItem,
};

export const reactQueryPersister = createSyncStoragePersister({ storage });