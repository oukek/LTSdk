import { LTHttpClient } from '../client';
import * as Types from '../types';
export declare class SynthesisService {
    private client;
    constructor(client: LTHttpClient);
    /**
     * 商品图换背景
     * 描述：根据商品图片和背景图，自动替换商品背景。
     * @param data 换背景请求参数
     * @returns 任务 ID
     */
    changeBackground(data: Types.IChangeBackgroundRequest): Promise<string>;
    /**
     * AI 模特
     * 描述：根据服饰图、模特脸 ID 和背景图，自动合成模特效果。
     * @param data AI 模特请求参数
     * @returns 任务 ID
     */
    modelSynthesis(data: Types.IModelSynthesisRequest): Promise<string>;
    /**
     * AI 试衣
     * 描述：根据服饰图和模特图，自动合成试衣效果。
     * @param data AI 试衣请求参数
     * @returns 任务 ID
     */
    dressSynthesis(data: Types.IDressSynthesisRequest): Promise<string>;
    /**
     * 获取背景列表
     * 描述：查询商品图换背景可用的背景模板列表。
     * @returns 背景列表
     */
    getBackgrounds(): Promise<Types.IBackgroundListResponse>;
    /**
     * 获取模特脸列表
     * 描述：查询 AI 模特可用的模特脸列表。
     * @returns 模特脸列表
     */
    getFaces(): Promise<Types.IFaceListResponse>;
}
