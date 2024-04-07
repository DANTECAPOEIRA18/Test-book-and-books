import axios, { AxiosStatic, AxiosInstance, AxiosRequestConfig } from 'axios'
import axiosRetry from 'axios-retry';

export default class httpClient {
    urlPrefix: string;
    axiosClient: AxiosStatic | AxiosInstance

    constructor(urlPrefix: string, baseUrl: string) {

        const baseHeaders: { [key: string]: string } = {}
        this.urlPrefix = urlPrefix;
        this.axiosClient = axios.create({ baseURL: baseUrl, headers: baseHeaders })

        axiosRetry(this.axiosClient, {
            retries: 0,
            retryDelay: (retryCount: any) => {
                return retryCount * 1000;
            },
            retryCondition: (error: any) => {
                return ![200, 201, 400, 401, 403, 419, 422, 500, 501].includes(error.response?.status || 0);
            },

        });
    }

    //Metodos

    private setHeaders(config: AxiosRequestConfig, token?: string): AxiosRequestConfig {
        if (!config.headers) {
            config.headers = {};
        }
        config.headers['Content-Type'] = 'application/json';
        config.headers['Accept'] = 'application/json';
        config.headers['app-id'] = '62f662632cd62f25e8fe63bc';
        if (token) {
            config.headers['Authorization'] = `${token}`;
        }
        return config;
    }

    async get(urlExtraPrefix?: string | undefined, token?: string, config?: AxiosRequestConfig) {
        const finalConfig = this.setHeaders(config || {}, token);
        return await this.axiosClient.get(urlExtraPrefix ? this.urlPrefix + urlExtraPrefix : this.urlPrefix, finalConfig)
            .then((response) => { return response })
            .catch((error) => { return error })
    }

    async getWithParams(urlExtraPrefix?: string | undefined, data?: object, token?: string, config?: AxiosRequestConfig) {
        const finalConfig = this.setHeaders(config || {}, token);
        finalConfig.params = data; 
        return await this.axiosClient.get(urlExtraPrefix ? this.urlPrefix + urlExtraPrefix : this.urlPrefix, finalConfig)
            .then((response) => { return response })
            .catch((error) => { return error })
    }

    async post(urlExtraPrefix?: string | undefined, data?: object | undefined, token?: string, config?: AxiosRequestConfig) {
        const finalConfig = this.setHeaders(config || {}, token);
        return await this.axiosClient.post(urlExtraPrefix ? this.urlPrefix + urlExtraPrefix : this.urlPrefix, data, finalConfig)
            .then((response) => { return response })
            .catch((error) => { return error })
    }

    async put(urlExtraPrefix?: string | undefined, data?: object | undefined, token?: string, config?: AxiosRequestConfig) {
        const finalConfig = this.setHeaders(config || {}, token);
        return await this.axiosClient.put(urlExtraPrefix ? this.urlPrefix + urlExtraPrefix : this.urlPrefix, data, finalConfig)
            .then((response) => { return response })
            .catch((error) => { return error })
    }

    async delete(urlExtraPrefix?: string | undefined, data?: object | undefined, token?: string, config?: AxiosRequestConfig) {
        const finalConfig = this.setHeaders(config || {}, token);
        finalConfig.params = data; 
        return await this.axiosClient.delete(urlExtraPrefix ? this.urlPrefix + urlExtraPrefix : this.urlPrefix, finalConfig)
            .then((response) => { return response })
            .catch((error) => { return error })
    }
}

export const client = new httpClient("", process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL: '');