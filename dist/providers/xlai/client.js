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
exports.XLAIHttpClient = void 0;
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("./utils");
class XLAIHttpClient {
    constructor(config) {
        this.config = config;
        this.client = axios_1.default.create({
            baseURL: config.baseUrl || 'https://api.lingtuipoddy.com', // 假设默认地址，用户需替换
            timeout: config.timeout || 60000,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    /**
     * 发送请求
     * 自动处理签名注入
     */
    request(method_1, uri_1) {
        return __awaiter(this, arguments, void 0, function* (method, uri, data = {}, options = {}) {
            const timestamp = Math.floor(Date.now() / 1000);
            const salt = (0, utils_1.generateUUID)();
            // 生成签名
            const sign = (0, utils_1.generateSignature)(this.config.appId, this.config.secret, uri, salt, timestamp);
            // 注入 Header
            const headers = Object.assign(Object.assign({}, options.headers), { 'appId': this.config.appId, 'timestamp': timestamp.toString(), 'salt': salt, 'sign': sign });
            // 自动注入 requestId 如果没有的话
            if (method.toUpperCase() === 'POST' && data && typeof data === 'object' && !data.requestId) {
                data.requestId = (0, utils_1.generateUUID)();
            }
            try {
                const response = yield this.client.request(Object.assign({ method, url: uri, data: method.toUpperCase() === 'POST' ? data : undefined, params: method.toUpperCase() === 'GET' ? data : undefined, headers }, options));
                // 灵图 API 文档说明：
                // "如果错误，返回统一的错误信息... code: 401"
                // "通过返回的 HTTP 状态码判断调用是否成功，2xx 代表成功"
                // 但有时业务逻辑错误可能包含在 200 响应中，或者 4xx/5xx 响应中。
                // Axios 默认只有 2xx 会 resolve，其他会 throw。
                return response.data;
            }
            catch (error) {
                if (error.response) {
                    // 服务端返回了非 2xx 响应
                    throw new Error(`XLAI API Error: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
                }
                throw error;
            }
        });
    }
    /**
     * 通用提交任务接口
     */
    postTask(uri, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.request('POST', uri, data);
            // 文档中响应体通常包含 jobId，但也可能是直接返回 jobId 字符串（文档写法有点含糊 "无 string 任务jobId"）
            // 实际上 JSON 应该是 { "jobId": "..." } 或者直接是字符串？
            // 根据文档示例:
            // 响应体:
            // 参数名称 类型 说明
            // 无 string 任务jobId
            // 这通常意味着返回的 Body 就是一个字符串，或者是一个对象里有个默认字段。
            // 但根据标准 JSON API，通常是 { "jobId": "xxx" }。
            // 考虑到 "响应数据类型为 application/json"，如果 Body 是纯字符串不太符合 JSON 规范（虽然也是合法的）。
            // 我们假设返回的是一个对象，或者我们需要检查类型。
            if (typeof res === 'string') {
                return res;
            }
            if (res && res.jobId) {
                return res.jobId;
            }
            // 兜底：如果 res 本身就是 jobId (虽然很少见)
            return res;
        });
    }
}
exports.XLAIHttpClient = XLAIHttpClient;
