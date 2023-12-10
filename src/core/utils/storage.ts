import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export const getItem = <T>(key: string): T => {
    const value = storage.getString(key);
    return value ? JSON.parse(value) || null : null;
}
export const setItem = <T>(key: string, value: T): void => {
    storage.set(key, JSON.stringify(value));
}

export const removeItem = (key: string): void => {
    storage.delete(key);
}