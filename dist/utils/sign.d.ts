/**
 * 生成签名
 * 顺序假设: appId, uri, timestamp, nonce, body
 * @param appId 应用ID
 * @param secret 应用密钥
 * @param uri 请求路径
 * @param timestamp 时间戳
 * @param nonce 随机字符串
 * @param body 请求体字符串
 */
export declare function generateSignature(appId: string, secret: string, uri: string, timestamp: number, nonce: string, body: string): string;
/**
 * 生成随机字符串
 */
export declare function generateNonce(): string;
