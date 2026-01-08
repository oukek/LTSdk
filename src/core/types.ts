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
export type JobStatus =
  | 'waiting'   // 等待执行
  | 'executing' // 执行中
  | 'succeed'   // 生成成功
  | 'failed'    // 生成失败
  | 'canceled';  // 已取消

/**
 * 任务查询响应
 */
export interface IJobResult {
  /** 任务状态 */
  status: JobStatus;
  /** 错误信息 (生成失败时才会有值) */
  message?: string;
  /** 生成的结果文件地址列表 */
  urls?: string[];
  /** 结果文件格式列表 */
  formats?: string[];
  /** 生成的文本内容 (如图生文、标题提取结果) */
  text?: string;
  /** 生成的结果文件地址 (兼容单数形式) */
  url?: string;
  /** 结果文件格式 (兼容单数形式) */
  format?: string;
}
