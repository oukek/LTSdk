import { AxiosRequestConfig } from 'axios';
import { ISdkConfig } from '../../core/types';
export declare class LTHttpClient {
    private config;
    private client;
    constructor(config: ISdkConfig);
    /**
     * 发送请求
     * 自动处理签名注入
     */
    request<T>(method: string, uri: string, data?: any, options?: AxiosRequestConfig): Promise<T>;
    /**
     * 通用提交任务接口
     */
    postTask(uri: string, data: any): Promise<string>;
}
