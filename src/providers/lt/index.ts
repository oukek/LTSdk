import { ISdkConfig } from '../../core/types';
import { LTHttpClient } from './client';
import { AIGCService } from './api/aigc';
import { SynthesisService } from './api/synthesis';
import { JobService } from './api/job';

/**
 * LTProvider 类，提供对 AIGC、效果合成和任务管理服务的访问
 */
export class LTProvider {
  /** HTTP 客户端实例 */
  public client: LTHttpClient;
  
  /** AIGC 相关服务 */
  public aigc: AIGCService;
  /** 效果合成相关服务 */
  public synthesis: SynthesisService;
  /** 任务管理相关服务 */
  public job: JobService;

  constructor(config: ISdkConfig) {
    this.client = new LTHttpClient(config);
    this.aigc = new AIGCService(this.client);
    this.synthesis = new SynthesisService(this.client);
    this.job = new JobService(this.client);
  }
}

export * from './types';
export * from './utils';
