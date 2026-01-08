import { ISdkConfig } from '../../core/types';
import { LTHttpClient } from './client';
import { AIGCService } from './api/aigc';
import { SynthesisService } from './api/synthesis';
import { JobService } from './api/job';
export declare class LTProvider {
    client: LTHttpClient;
    aigc: AIGCService;
    synthesis: SynthesisService;
    job: JobService;
    constructor(config: ISdkConfig);
}
export * from './types';
export * from './utils';
