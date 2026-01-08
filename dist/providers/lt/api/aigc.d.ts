import { LTHttpClient } from '../client';
import * as Types from '../types';
export declare class AIGCService {
    private client;
    constructor(client: LTHttpClient);
    /** 文生图 */
    text2img(data: Types.IText2ImgRequest): Promise<string>;
    /** 文生图进阶版 */
    text2imgPro(data: Types.IText2ImgProRequest): Promise<string>;
    /** 图生图 */
    img2img(data: Types.IImg2ImgRequest): Promise<string>;
    /** 无缝拼接图 */
    seamless(data: Types.ISeamlessRequest): Promise<string>;
    /** 免抠素材生成 */
    transparent(data: Types.ITransparentRequest): Promise<string>;
    /** 图生文 */
    img2text(data: Types.IImg2TextRequest): Promise<string>;
    /** 商品图提取标题 */
    title(data: Types.ITitleRequest): Promise<string>;
    /** 智能抠图 */
    matting(data: Types.IMattingRequest): Promise<string>;
    /** 线稿提取 */
    lineart(data: Types.ILineArtRequest): Promise<string>;
    /** 无损放大 */
    upscale(data: Types.IUpscaleRequest): Promise<string>;
    /** 智能擦除 */
    remove(data: Types.IRemoveRequest): Promise<string>;
    /** 转矢量图 */
    vector(data: Types.IVectorRequest): Promise<string>;
    /** 相似图裂变 */
    reimage(data: Types.IReimageRequest): Promise<string>;
    /** 相似图裂变进阶版 */
    reimagePro(data: Types.IReimageProRequest): Promise<string>;
    /** 四方连续图 */
    seamlessPro(data: Types.ISeamlessProRequest): Promise<string>;
    /** 扩图 */
    expand(data: Types.IExpandRequest): Promise<string>;
    /** 图案裁剪 */
    detect(data: Types.IDetectRequest): Promise<string>;
    /** 风格转绘 */
    styleTransfer(data: Types.IStyleTransferRequest): Promise<string>;
    /** 艺术字生成 */
    artWord(data: Types.IArtWordRequest): Promise<string>;
}
