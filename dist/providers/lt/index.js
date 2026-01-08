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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LTProvider = void 0;
const client_1 = require("./client");
const aigc_1 = require("./api/aigc");
const synthesis_1 = require("./api/synthesis");
const job_1 = require("./api/job");
/**
 * LTProvider 类，提供对 AIGC、效果合成和任务管理服务的访问
 */
class LTProvider {
    constructor(config) {
        this.client = new client_1.LTHttpClient(config);
        this.aigc = new aigc_1.AIGCService(this.client);
        this.synthesis = new synthesis_1.SynthesisService(this.client);
        this.job = new job_1.JobService(this.client);
    }
}
exports.LTProvider = LTProvider;
__exportStar(require("./types"), exports);
__exportStar(require("./utils"), exports);
