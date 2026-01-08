/**
 * 生成 UUID v4
 */
export declare function generateUUID(): string;
/**
 * 生成 XLAI 签名
 * 规则: appId + uri + salt + timestamp + secret
 * @param appId 应用ID
 * @param secret 应用密钥
 * @param uri 请求路径
 * @param salt 随机字符串 (UUID)
 * @param timestamp 时间戳 (秒)
 */
export declare function generateSignature(appId: string, secret: string, uri: string, salt: string, timestamp: number): string;
