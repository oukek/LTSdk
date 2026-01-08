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
exports.generateSignature = generateSignature;
exports.generateNonce = generateNonce;
const crypto = __importStar(require("crypto"));
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
function generateSignature(appId, secret, uri, timestamp, nonce, body) {
    // 构造待签名字符串
    // 注意：具体的分隔符或顺序可能需要根据实际文档调整。
    // 这里我们假设是直接拼接。
    // 根据片段 "1. appId 2. uri"，我们遵循该顺序。
    const stringToSign = `${appId}${uri}${timestamp}${nonce}${body}`;
    // 使用 HMAC-SHA256 进行签名
    return crypto.createHmac('sha256', secret).update(stringToSign).digest('hex');
}
/**
 * 生成随机字符串
 */
function generateNonce() {
    return crypto.randomBytes(16).toString('hex');
}
