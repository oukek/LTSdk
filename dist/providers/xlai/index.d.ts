import { ISdkConfig } from '../../core/types';
import { XLAIHttpClient } from './client';
import { AIGCService } from './api/aigc';
import { SynthesisService } from './api/synthesis';
import { JobService } from './api/job';
export declare class XLAIProvider {
    client: XLAIHttpClient;
    aigc: AIGCService;
    synthesis: SynthesisService;
    job: JobService;
    constructor(config: ISdkConfig);
}
export * from './types';
export * from './utils';
