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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobService = void 0;
class JobService {
    constructor(client) {
        this.client = client;
    }
    /**
     * 查询任务结果
     * 描述：根据任务 ID 查询任务的执行状态和生成结果。
     * @param jobId 任务 ID
     * @returns 任务结果
     */
    getResult(jobId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('POST', '/aigc/job/result', { jobId });
        });
    }
    /**
     * 取消任务
     * 描述：取消已提交的任务，只有处于 waiting 状态的任务才能取消。
     * @param jobId 任务 ID
     * @param reason 取消原因，可选
     * @returns 取消结果
     */
    cancel(jobId, reason) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('POST', '/aigc/job/cancel', { jobId, reason });
        });
    }
}
exports.JobService = JobService;
