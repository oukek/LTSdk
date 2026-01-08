import { LTHttpClient } from '../client';
import { IJobResult } from '../../../core/types';
import { ICancelResponse } from '../types';
export declare class JobService {
    private client;
    constructor(client: LTHttpClient);
    /** 查询任务结果 */
    getResult(jobId: string): Promise<IJobResult>;
    /** 取消任务 */
    cancel(jobId: string, reason?: string): Promise<ICancelResponse>;
}
