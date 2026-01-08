import { LTHttpClient } from '../client';
import { IJobResult } from '../../../core/types';
import { ICancelResponse } from '../types';
export declare class JobService {
    private client;
    constructor(client: LTHttpClient);
    /**
     * 查询任务结果
     * 描述：根据任务 ID 查询任务的执行状态和生成结果。
     * @param jobId 任务 ID
     * @returns 任务结果
     */
    getResult(jobId: string): Promise<IJobResult>;
    /**
     * 取消任务
     * 描述：取消已提交的任务，只有处于 waiting 状态的任务才能取消。
     * @param jobId 任务 ID
     * @param reason 取消原因，可选
     * @returns 取消结果
     */
    cancel(jobId: string, reason?: string): Promise<ICancelResponse>;
}
