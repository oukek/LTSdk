import { LTHttpClient } from '../client';
import * as Types from '../types';

export class AIGCService {
  constructor(private client: LTHttpClient) {}

  /**
   * 文生图
   * 描述：根据文本描述词，生成图片，一次生成一张。
   * @param data 文生图请求参数
   * @returns 任务 ID
   */
  async text2img(data: Types.IText2ImgRequest): Promise<string> {
    return this.client.postTask('/aigc/text2img', data);
  }

  /**
   * 文生图进阶版
   * 描述：根据文本描述词，生成更具艺术性的图片，一次生成 4 张。
   * @param data 文生图进阶版请求参数
   * @returns 任务 ID
   */
  async text2imgPro(data: Types.IText2ImgProRequest): Promise<string> {
    return this.client.postTask('/aigc/text2imgPro', data);
  }

  /**
   * 图生图
   * 描述：根据文本描述词和参考图，生成图片，一次生成一张。
   * @param data 图生图请求参数
   * @returns 任务 ID
   */
  async img2img(data: Types.IImg2ImgRequest): Promise<string> {
    return this.client.postTask('/aigc/img2img', data);
  }

  /**
   * 无缝拼接图
   * 描述：根据文本描述词，生成可无缝拼接的图片，一次生成一张。
   * @param data 无缝拼接图请求参数
   * @returns 任务 ID
   */
  async seamless(data: Types.ISeamlessRequest): Promise<string> {
    return this.client.postTask('/aigc/seamless', data);
  }

  /**
   * 免抠素材生成
   * 描述：根据文本描述词，生成透明背景的素材图片。
   * @param data 免抠素材生成请求参数
   * @returns 任务 ID
   */
  async transparent(data: Types.ITransparentRequest): Promise<string> {
    return this.client.postTask('/aigc/transparent', data);
  }

  /**
   * 图生文
   * 描述：根据图片提取提示词。
   * @param data 图生文请求参数
   * @returns 任务 ID
   */
  async img2text(data: Types.IImg2TextRequest): Promise<string> {
    return this.client.postTask('/aigc/img2text', data);
  }

  /**
   * 商品图提取标题
   * 描述：根据商品图片提取标题。
   * @param data 提取标题请求参数
   * @returns 任务 ID
   */
  async title(data: Types.ITitleRequest): Promise<string> {
    return this.client.postTask('/aigc/title', data);
  }

  /**
   * 智能抠图
   * 描述：对图片进行智能抠图处理。
   * @param data 抠图请求参数
   * @returns 任务 ID
   */
  async matting(data: Types.IMattingRequest): Promise<string> {
    return this.client.postTask('/aigc/matting', data);
  }

  /**
   * 线稿提取
   * 描述：上传图片，自动提取线稿。
   * @param data 线稿提取请求参数
   * @returns 任务 ID
   */
  async lineart(data: Types.ILineArtRequest): Promise<string> {
    return this.client.postTask('/aigc/lineart', data);
  }

  /**
   * 无损放大
   * 描述：对图片进行无损放大或变清晰处理。
   * @param data 无损放大请求参数
   * @returns 任务 ID
   */
  async upscale(data: Types.IUpscaleRequest): Promise<string> {
    return this.client.postTask('/aigc/upscale', data);
  }

  /**
   * 智能擦除
   * 描述：根据蒙层区域对原图进行智能擦除。
   * @param data 擦除请求参数
   * @returns 任务 ID
   */
  async remove(data: Types.IRemoveRequest): Promise<string> {
    return this.client.postTask('/aigc/remove', data);
  }

  /**
   * 转矢量图
   * 描述：将位图转换为矢量图格式 (SVG/EPS)。
   * @param data 转矢量图请求参数
   * @returns 任务 ID
   */
  async vector(data: Types.IVectorRequest): Promise<string> {
    return this.client.postTask('/aigc/vector', data);
  }

  /**
   * 相似图裂变
   * 描述：根据图片生成相似图片。
   * @param data 相似图裂变请求参数
   * @returns 任务 ID
   */
  async reimage(data: Types.IReimageRequest): Promise<string> {
    return this.client.postTask('/aigc/reimage', data);
  }

  /**
   * 相似图裂变进阶版
   * 描述：根据图片生成高质量的相似图片，一次生成 4 张。
   * @param data 相似图裂变进阶版请求参数
   * @returns 任务 ID
   */
  async reimagePro(data: Types.IReimageProRequest): Promise<string> {
    return this.client.postTask('/aigc/reimage/pro', data);
  }

  /**
   * 四方连续图
   * 描述：根据文本或图片生成可无缝拼接的四方连续图。
   * @param data 四方连续图请求参数
   * @returns 任务 ID
   */
  async seamlessPro(data: Types.ISeamlessProRequest): Promise<string> {
    return this.client.postTask('/aigc/seamless/pro', data);
  }

  /**
   * 扩图
   * 描述：AI 自动扩图，支持按倍数或按比例扩图。
   * @param data 扩图请求参数
   * @returns 任务 ID
   */
  async expand(data: Types.IExpandRequest): Promise<string> {
    return this.client.postTask('/aigc/expand', data);
  }

  /**
   * 图案裁剪
   * 描述：自动识别 T-shirt 上的印花图案并裁剪下来。
   * @param data 图案裁剪请求参数
   * @returns 任务 ID
   */
  async detect(data: Types.IDetectRequest): Promise<string> {
    return this.client.postTask('/aigc/detect', data);
  }

  /**
   * 风格转绘
   * 描述：输入图片，选择风格，一键转换（仅限算力专用模式）。
   * @param data 风格转绘请求参数
   * @returns 任务 ID
   */
  async styleTransfer(data: Types.IStyleTransferRequest): Promise<string> {
    return this.client.postTask('/aigc/style-transfer', data);
  }

  /**
   * 艺术字生成
   * 描述：根据描述词，生成带有艺术字（英文）的图片。
   * @param data 艺术字生成请求参数
   * @returns 任务 ID
   */
  async artWord(data: Types.IArtWordRequest): Promise<string> {
    return this.client.postTask('/aigc/art-word', data);
  }
}
