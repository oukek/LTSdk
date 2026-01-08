"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XLAISdk = void 0;
const axios_1 = __importDefault(require("axios"));
const sign_1 = require("./utils/sign");
class XLAISdk {
    constructor(config) {
        this.appId = config.appId;
        this.secret = config.secret;
        // 默认 URL 或用户提供
        this.baseUrl = config.baseUrl || '';
        if (!this.baseUrl) {
            console.warn('XLAISdk: 未提供 baseUrl。请确保在配置中传递它。');
        }
        this.client = axios_1.default.create({
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json',
            },
            validateStatus: () => true, // 手动处理状态码
        });
    }
    /**
     * 通用请求方法，处理签名和错误解析
     * @param method HTTP 方法
     * @param uri 请求路径
     * @param data 请求数据
     */
    request(method_1, uri_1) {
        return __awaiter(this, arguments, void 0, function* (method, uri, data = {}) {
            const timestamp = Math.floor(Date.now() / 1000);
            const nonce = (0, sign_1.generateNonce)();
            // 确保 body 是字符串以进行签名计算
            const bodyStr = JSON.stringify(data);
            const signature = (0, sign_1.generateSignature)(this.appId, this.secret, uri, timestamp, nonce, bodyStr);
            try {
                const response = yield this.client.request({
                    method,
                    url: uri,
                    data,
                    headers: {
                        'X-App-Id': this.appId,
                        'X-Timestamp': timestamp.toString(),
                        'X-Nonce': nonce,
                        'X-Signature': signature,
                    },
                });
                // 检查 HTTP 状态码 (2xx 代表成功)
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(`HTTP 错误 ${response.status}: ${JSON.stringify(response.data)}`);
                }
                // 检查 API 级别的错误代码
                // 片段说明："2xx 代表成功；如果错误，返回统一的错误信息... code: 401"
                if (response.data && typeof response.data.code === 'number' && response.data.code !== 200) {
                    throw new Error(`API 错误 ${response.data.code}: ${response.data.message}`);
                }
                return response.data.data;
            }
            catch (error) {
                // 重新抛出带有清晰消息的错误
                throw error;
            }
        });
    }
    /**
     * 文本生成图片
     * @param options 参数配置
     */
    text2img(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('POST', '/api/text2img', options);
        });
    }
    /**
     * 商品图换背景
     * @param options 参数配置
     */
    changeBackground(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('POST', '/aigc/synthesis/change-background', options);
        });
    }
}
exports.XLAISdk = XLAISdk;
