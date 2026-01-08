import { ISdkConfig } from '../../core/types';
import { LTHttpClient } from './client';
import { AIGCService } from './api/aigc';
import { SynthesisService } from './api/synthesis';
import { JobService } from './api/job';
/**
 * LTProvider 类，提供对 AIGC、效果合成和任务管理服务的访问
 */
export declare class LTProvider {
    /** HTTP 客户端实例 */
    client: LTHttpClient;
    /** AIGC 相关服务 */
    aigc: AIGCService;
    /** 效果合成相关服务 */
    synthesis: SynthesisService;
    /** 任务管理相关服务 */
    job: JobService;
    constructor(config: ISdkConfig);
}
export * from './types';
export * from './utils';
