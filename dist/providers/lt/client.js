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
exports.LTHttpClient = void 0;
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("./utils");
class LTHttpClient {
    constructor(config) {
        this.config = config;
        this.client = axios_1.default.create({
            baseURL: config.baseUrl || 'https://api.lingtuipoddy.com',
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
                return response.data;
            }
            catch (error) {
                if (error.response) {
                    throw new Error(`LTSdk API Error: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
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
            if (typeof res === 'string') {
                return res;
            }
            if (res && res.jobId) {
                return res.jobId;
            }
            return res;
        });
    }
}
exports.LTHttpClient = LTHttpClient;
