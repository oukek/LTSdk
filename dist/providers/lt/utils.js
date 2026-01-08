"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUUID = generateUUID;
exports.generateSignature = generateSignature;
const crypto = __importStar(require("crypto"));
/**
 * 生成 UUID v4
 */
function generateUUID() {
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
function generateSignature(appId, secret, uri, salt, timestamp) {
    // 拼接字符串: 注意顺序 appId + uri + salt + timestamp + secret
    const stringToSign = `${appId}${uri}${salt}${timestamp}${secret}`;
    // SHA256 计算
    return crypto.createHash('sha256').update(stringToSign).digest('hex');
}
