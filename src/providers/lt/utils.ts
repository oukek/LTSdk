import * as crypto from 'crypto';

/**
 * 生成 UUID v4
 */
export function generateUUID(): string {
  return crypto.randomUUID();
}

/**
 * 生成 XLAI 签名
 * 规则: appId + uri + salt + timestamp + secret
 * @param appId 应用ID
 * @param secret 应用密钥
 * @param uri 请求路径
 * @param salt 随机字符串 (UUID)
 * @param timestamp 时间戳 (秒)
 */
export function generateSignature(
  appId: string,
  secret: string,
  uri: string,
  salt: string,
  timestamp: number
): string {
  // 拼接字符串: 注意顺序 appId + uri + salt + timestamp + secret
  const stringToSign = `${appId}${uri}${salt}${timestamp}${secret}`;
  
  // SHA256 计算
  return crypto.createHash('sha256').update(stringToSign).digest('hex');
}
