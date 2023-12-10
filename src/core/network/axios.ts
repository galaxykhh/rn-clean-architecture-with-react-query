import axios, { InternalAxiosRequestConfig } from 'axios';

const baseAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

baseAxios.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {

        // TODO: set token to Authorization headers if necessary
        // const token = await getMyToken();
        // if (token) {
        //     config.headers['Authorization'] = `Bearer ${token}`;
        // }

        return config;
    },
);

export default baseAxios;