import { XLAIConfig, Text2ImgOptions, ChangeBackgroundOptions } from './types';
export declare class XLAISdk {
    private appId;
    private secret;
    private baseUrl;
    private client;
    constructor(config: XLAIConfig);
    /**
     * 通用请求方法，处理签名和错误解析
     * @param method HTTP 方法
     * @param uri 请求路径
     * @param data 请求数据
     */
    request<T = any>(method: string, uri: string, data?: any): Promise<T>;
    /**
     * 文本生成图片
     * @param options 参数配置
     */
    text2img(options: Text2ImgOptions): Promise<any>;
    /**
     * 商品图换背景
     * @param options 参数配置
     */
    changeBackground(options: ChangeBackgroundOptions): Promise<any>;
}
