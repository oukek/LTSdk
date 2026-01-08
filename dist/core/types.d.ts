export interface ISdkConfig {
    /** 应用ID */
    appId: string;
    /** 应用密钥 */
    secret: string;
    /** API 基础地址 */
    baseUrl?: string;
    /** 请求超时时间 (毫秒) */
    timeout?: number;
}
export interface IBaseResponse<T = any> {
    /** 任务ID (部分接口直接返回) */
    jobId?: string;
    /** 状态码 (非 HTTP 状态码，而是业务错误码) */
    code?: number;
    /** 错误信息 */
    message?: string;
    /** 数据负载 */
    data?: T;
    /** 兼容部分直接返回字段的情况 */
    [key: string]: any;
}
/**
 * 任务查询结果状态
 */
export type JobStatus = 'waiting' | 'executing' | 'succeed' | 'failed' | 'canceled';
/**
 * 任务查询响应
 */
export interface IJobResult {
    status: JobStatus;
    message?: string;
    urls?: string[];
    formats?: string[];
    text?: string;
    url?: string;
    format?: string;
}
