import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ISdkConfig, IBaseResponse, IJobResult } from '../../core/types';
import { generateSignature, generateUUID } from './utils';
import { ITaskResponse, ICancelResponse } from './types';

export class LTHttpClient {
  private config: ISdkConfig;
  private client: AxiosInstance;

  constructor(config: ISdkConfig) {
    this.config = config;
    this.client = axios.create({
      baseURL: config.baseUrl || 'https://api.lingtuipoddy.com',
      timeout: config.timeout || 60000,
      headers: {
        'Content-Type': 'application/json',
      },
      transformResponse: [
        (data: any) => {
          if (typeof data === 'string') {
            // 简单处理：将 JSON 中的大数字转换为字符串，防止精度丢失
            try {
              // 1. 匹配 : 后面跟着的大数字
              let processed = data.replace(/:\s*(-?\d{15,})/g, ': "$1"');
              // 2. 如果整个字符串就是一个大数字（某些接口可能直接返回 ID）
              if (/^\d{15,}$/.test(data.trim())) {
                processed = `"${data.trim()}"`;
              }
              return processed;
            } catch (e) {
              return data;
            }
          }
          return data;
        },
        ...(Array.isArray(axios.defaults.transformResponse) 
          ? axios.defaults.transformResponse 
          : axios.defaults.transformResponse 
            ? [axios.defaults.transformResponse] 
            : [])
      ] as any
    });
  }

  /**
   * 发送请求
   * 自动处理签名注入
   */
  public async request<T>(method: string, uri: string, data: any = {}, options: AxiosRequestConfig = {}): Promise<T> {
    const timestamp = Math.floor(Date.now() / 1000);
    const salt = generateUUID();
    
    // 生成签名
    const sign = generateSignature(
      this.config.appId,
      this.config.secret,
      uri,
      salt,
      timestamp
    );

    // 注入 Header
    const headers = {
      ...options.headers,
      'appId': this.config.appId,
      'timestamp': timestamp.toString(),
      'salt': salt,
      'sign': sign,
    };

    // 自动注入 requestId 如果没有的话
    if (method.toUpperCase() === 'POST' && data && typeof data === 'object' && !data.requestId) {
        data.requestId = generateUUID();
    }

    try {
      const response = await this.client.request<T>({
        method,
        url: uri,
        data: method.toUpperCase() === 'POST' ? data : undefined,
        params: method.toUpperCase() === 'GET' ? data : undefined,
        headers,
        ...options,
      });

      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw new Error(`LTSdk API Error: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
      }
      throw error;
    }
  }

  /**
   * 通用提交任务接口
   */
  public async postTask(uri: string, data: any): Promise<string> {
    const res = await this.request<any>('POST', uri, data);
    
    if (typeof res === 'string') {
        return res;
    }
    if (res && res.jobId) {
        return res.jobId;
    }
    return res as unknown as string;
  }
}
