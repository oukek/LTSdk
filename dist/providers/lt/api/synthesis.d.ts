import { LTHttpClient } from '../client';
import * as Types from '../types';
export declare class SynthesisService {
    private client;
    constructor(client: LTHttpClient);
    /** 商品图换背景 */
    changeBackground(data: Types.IChangeBackgroundRequest): Promise<string>;
    /** AI模特 */
    model(data: Types.IModelSynthesisRequest): Promise<string>;
    /** AI试衣 */
    dress(data: Types.IDressSynthesisRequest): Promise<string>;
    /** 查询背景列表 */
    getBackgrounds(): Promise<Types.IBackgroundListResponse>;
    /** 查询模特脸列表 */
    getFaces(): Promise<Types.IFaceListResponse>;
}
