// ================= AIGC 接口参数 =================

export interface IBaseRequest {
  /**
   * 请求ID，需保证唯一。相同的ID将返回相同的结果。
   * (SDK会自动生成默认值 UUID)
   */
  requestId?: string;
}

export interface IText2ImgRequest extends IBaseRequest {
  /** 提示词，描述想要生成的图片内容 (最大长度 1000) */
  prompt: string;
  /**
   * 风格模型 ID，默认：common。可选值：
   * - common: 通用
   * - pictureBook: 绘本
   * - illustration: 插画
   * - anime: 动漫
   * - game: 游戏
   * - photo: 写实
   * - 3D: 3D
   * - eCommerce: 电商
   * - logo: Logo
   */
  style?: string;
  /**
   * 画面比例，默认 1:1。可选值：
   * "1:1", "2:3", "3:2", "3:4", "4:3", "9:16", "16:9"
   */
  ar?: string;
  /** 生成图片数量，默认 1。可选值：1, 2, 4 */
  num?: number;
}

export interface IText2ImgProRequest extends IBaseRequest {
  /** 提示词，描述想要生成的图片内容，生成更具艺术性的图片 (最大长度 200，一次生成 4 张) */
  prompt: string;
  /**
   * 画面比例，默认 1:1。可选值：
   * "1:1", "2:3", "3:2", "3:4", "4:3", "9:16", "16:9"
   */
  ar?: string;
}

export interface IImg2ImgRequest extends IBaseRequest {
  /** 提示词，描述想要生成的图片内容 (最大长度 200) */
  prompt: string;
  /**
   * 形象参考图片 URL 列表，最多 4 张。
   * 支持格式: png/jpg/webp，尺寸不超过 4096*4096，大小不超过 10M。
   */
  crefImages: string[];
  /** 形象参考图片权重，取值范围 0-1，默认 0.5 */
  crefImageWeight?: number;
  /**
   * 风格模型 ID，默认：common。可选值：
   * - common: 通用
   * - pictureBook: 绘本
   * - illustration: 插画
   * - anime: 动漫
   * - game: 游戏
   * - photo: 写实
   * - 3D: 3D
   * - eCommerce: 电商
   * - logo: Logo
   */
  style?: string;
  /**
   * 画面比例，默认 1:1。可选值：
   * "1:1", "2:3", "3:2", "3:4", "4:3", "9:16", "16:9"
   */
  ar?: string;
  /** 生成图片数量，默认 1。可选值：1, 2, 4 */
  num?: number;
}

export interface ISeamlessRequest extends IBaseRequest {
  /** 提示词，描述想要生成的图片内容，生成可无缝拼接的图片 (最大长度 200) */
  prompt: string;
  /**
   * 风格模型 ID，默认：common。可选值：
   * - common: 通用
   * - pictureBook: 绘本
   * - illustration: 插画
   * - anime: 动漫
   * - game: 游戏
   * - photo: 写实
   * - 3D: 3D
   * - eCommerce: 电商
   * - logo: Logo
   */
  style?: string;
  /** 画面比例，仅支持 "1:1" */
  ar?: string;
  /** 生成图片数量，默认 1。可选值：1, 2, 4 */
  num?: number;
}

export interface ITransparentRequest extends IBaseRequest {
  /** 提示词，描述想要生成的图片内容，生成透明背景的素材图片 (最大长度 200) */
  prompt: string;
  /**
   * 风格模型 ID，默认：common。可选值：
   * - common: 通用
   * - pictureBook: 绘本
   * - illustration: 插画
   * - anime: 动漫
   * - game: 游戏
   * - photo: 写实
   * - 3D: 3D
   * - eCommerce: 电商
   * - logo: Logo
   */
  style?: string;
  /** 画面比例，默认 1:1。可选值： "1:1" */
  ar?: string;
  /** 生成图片数量，默认 1。可选值：1, 2, 4 */
  num?: number;
}

export interface IImg2TextRequest extends IBaseRequest {
  /**
   * 图片 URL，用于提取提示词。
   * 支持格式: png/jpg/webp，尺寸不超过 4096*4096，大小不超过 10M。
   */
  image: string;
}

export interface ITitleRequest extends IBaseRequest {
  /**
   * 商品图片 URL。
   * 支持格式: png/jpg/webp，尺寸不超过 4096*4096，大小不超过 10M。
   */
  image: string;
  /** 自定义生成标题的规则说明，可选 */
  prompt?: string;
}

export interface IMattingRequest extends IBaseRequest {
  /**
   * 图片 URL。
   * 支持格式: png/jpg/webp，尺寸不超过 4096*4096，大小不超过 10M。
   */
  image: string;
  /** 抠图类型，默认 0。可选值：0: 普通, 1: 扣头 */
  type?: number;
  /** 结果文件格式，支持同时输出。可选值：['png', 'psd'] */
  formats?: string[];
}

export interface ILineArtRequest extends IBaseRequest {
  /**
   * 图片 URL，自动提取线稿。
   * 支持格式: png/jpg/webp，尺寸不超过 4096*4096，大小不超过 10M。
   */
  image: string;
  /** 提示词，用于画面微调 (最大长度 200)，可选 */
  prompt?: string;
}

export interface IUpscaleRequest extends IBaseRequest {
  /**
   * 图片 URL。
   * 支持格式: png/jpg/webp，宽或高不超过 2048，大小不超过 10M。
   */
  image: string;
  /** 任务类型，默认 "0"。可选值："0": 超分放大, "1": 变清晰 */
  type?: string;
  /**
   * 放大倍数或分辨率。可选值：1, 2, 4 (默认 2)。
   * - 类型为 "0" 时，代表放大倍数；
   * - 类型为 "1" 时，代表输出分辨率：1: 1K, 2: 2K, 4: 4K。
   */
  multiple?: number;
  /** 是否进行降噪处理，默认 false */
  denoise?: boolean;
}

export interface IRemoveRequest extends IBaseRequest {
  /**
   * 原图 URL。
   * 支持格式: png/jpg/webp，宽或高不超过 4096，大小不超过 10M。
   */
  image: string;
  /**
   * 需要擦除的区域蒙层 URL。
   * 图片大小需与原图一致，擦除区域用白色表示，其他区域用黑色表示。
   */
  mask: string;
}

export interface IVectorRequest extends IBaseRequest {
  /**
   * 图片 URL。
   * 支持格式: png/jpg/webp，宽或高不超过 4096，大小不超过 10M。
   */
  image: string;
  /** 导出格式列表，默认 ['svg']。可选值：['svg', 'eps'] */
  formats?: string[];
}

export interface IReimageRequest extends IBaseRequest {
  /**
   * 原图 URL。
   * 支持格式: png/jpg/webp，尺寸不超过 4096*4096，大小不超过 10M。
   */
  image: string;
  /** 图片权重，取值范围 0-1，默认 0.5 */
  imageWeight: number;
  /** 生成的结果是否是无缝拼接图，要求输入的图片也是基本可无缝拼接的。默认 false */
  seamless?: boolean;
  /** 画面微调提示词 (最大长度 200)，可选 */
  prompt?: string;
  /**
   * 画面比例，默认 1:1。可选值：
   * "1:1", "2:3", "3:2", "3:4", "4:3", "9:16", "16:9"
   */
  ar?: string;
  /** 生成图片数量，默认 1。可选值：1, 2, 4 */
  num?: number;
}

export interface IReimageProRequest extends IBaseRequest {
  /**
   * 原图 URL。
   * 支持格式: png/jpg/webp，尺寸不超过 4096*4096，大小不超过 10M。
   */
  image: string;
  /** 相似度，取值范围 0-1，默认 0.75。仅在 "0" (艺术设计) 模式下有效 */
  similarity: number;
  /** 生成模式，默认 "0"。可选值："0": 艺术设计 (更具艺术感), "1": 文字强化 (更精准识别文字) */
  type?: string;
  /** 是否仅裂变图片中的图案信息，默认 false */
  onlyPattern?: boolean;
  /** 裂变结果是否为圆形图案，默认 false */
  circle?: boolean;
  /** 指定结果图的背景颜色，默认不指定。可选值：0: 不指定, 1: 黑色, 2: 白色 */
  bgColor?: number;
  /**
   * 画面比例，默认 1:1。可选值：
   * "1:1", "2:3", "3:2", "3:4", "4:3", "9:16", "16:9"
   */
  ar?: string;
  /** 生成图片数量，默认 4。可选值：2, 4 */
  num?: number;
}

export interface ISeamlessProRequest extends IBaseRequest {
  /**
   * 任务类型。可选值：
   * - 0: 文生图
   * - 1: 相似裂变
   * - 2: 原图连续
   * - 3: 二方连续
   */
  type: number;
  /**
   * 图片 URL。
   * - 非文生图模式 (type 1, 2, 3) 时必传。
   * - 文生图模式 (type 0) 不要传。
   * - 支持格式: png/jpg/webp，尺寸不超过 4096*4096，大小不超过 10M。
   */
  image?: string;
  /**
   * 提示词。
   * - 文生图模式 (type 0) 时必传 (最大长度 200)。
   * - 非文生图模式 (type 1, 2, 3) 不要传。
   */
  prompt?: string;
  /**
   * 画面比例。
   * - 二方连续图 (type 3) 有效，默认 1:1。
   * - 可选值: "1:1", "2:3", "3:2", "3:4", "4:3", "9:16", "16:9" 或自定义 "宽:高"
   */
  ar?: string;
}

export interface IExpandRequest extends IBaseRequest {
  /** 扩图类型。可选值：1: 按原图倍数, 2: 按比例 */
  type: number;
  /**
   * 图片 URL。
   * 支持格式: png/jpg/webp，尺寸不超过 4096*4096，大小不超过 10M。
   */
  image: string;
  /**
   * 扩图倍数。
   * - 按原图倍数 (type 1) 时有效。
   * - 必须大于 1，例如扩 20% 则输入 1.2。
   */
  scale?: number;
  /**
   * 画面比例。
   * - 按比例扩图 (type 2) 时有效。
   * - 可选值: "1:1", "2:3", "3:2", "3:4", "4:3", "9:16", "16:9" 或自定义 "宽:高"
   */
  ar?: string;
}

export interface IDetectRequest extends IBaseRequest {
  /**
   * 图片 URL。
   * - 自动识别 T-shirt 上的印花图案并裁剪。
   * - 支持格式: png/jpg/webp，尺寸不超过 4096*4096，大小不超过 10M。
   */
  image: string;
}

export interface IStyleTransferRequest extends IBaseRequest {
  /** 风格化类型。可选值：1: 宠物, 2: 肖像 */
  type: number;
  /** 风格 ID，对应风格的 code */
  style: string;
  /**
   * 图片 URL。
   * 支持格式: png/jpg/webp，尺寸不超过 4096*4096，大小不超过 10M。
   */
  image: string;
  /**
   * 是否返回遮罩图，默认 false。
   * - 如果为 true，则任务结果中返回两张图片：第一张为结果图，第二张为 mask 图。
   */
  returnMask?: boolean;
}

export interface IArtWordRequest extends IBaseRequest {
  /**
   * 提示词，描述想要生成的带有艺术字（英文）的图片。
   * - 最大长度 200，英文提示词效果更好。
   */
  prompt: string;
  /**
   * 画面比例，默认 1:1。可选值：
   * "1:1", "2:3", "3:2", "3:4", "4:3", "9:16", "16:9"
   */
  ar?: string;
  /** 生成图片数量，默认 4。可选值：1, 2, 4 */
  num?: number;
}

// ================= 效果合成接口参数 =================

export interface IGoodsInfo {
  /**
   * 商品图片 URL。
   * - 必须是只有商品的透明背景图。
   * - 需裁剪成只包含商品的最小图片。
   * - 支持格式: png/jpg/webp，大小不超过 10M。
   */
  url: string;
  /** 相对于画布左上角的 X 轴偏移量 */
  x: number;
  /** 相对于画布左上角的 Y 轴偏移量 */
  y: number;
  /** 商品在画布中的宽度，可能与实际图片宽度不一致 */
  width: number;
  /** 商品在画布中的高度，可能与实际图片高度不一致 */
  height: number;
}

export interface IBackgroundInfo {
  /**
   * 背景图片 URL。
   * 图片大小需与结果图的宽高保持一致。
   * 支持格式: png/jpg/webp，大小不超过 10M。
   */
  url: string;
  /**
   * 不需要参考的区域蒙层 URL。
   * 图片大小需与结果图一致，不需要参考的区域用白色表示，其他区域用黑色表示。
   */
  mask?: string;
  /** 背景 ID，可通过查询背景列表接口获取 */
  bgId?: string;
}

export interface IChangeBackgroundRequest extends IBaseRequest {
  /** 结果图宽度，范围：400 ~ 1280 */
  width: number;
  /** 结果图高度，范围：400 ~ 1280 */
  height: number;
  /** 商品图信息 */
  goods: IGoodsInfo;
  /** 背景图信息 */
  background: IBackgroundInfo;
  /** 商品是否进行智能调色，默认 true */
  productSmartColor?: boolean;
  /** 背景是否强参考，默认 true */
  referenceStrong?: boolean;
  /** 生成图片数量，默认 1。可选值：1, 2, 4 */
  num?: number;
}

export interface IModelSynthesisRequest extends IBaseRequest {
  /**
   * 模特服饰图 URL。
   * 真人模特服饰图。
   */
  model: string;
  /** 模特脸 ID，可通过查询模特脸列表接口获取 */
  faceId: string;
  /**
   * 背景图片 URL。
   * 不传则保持原模特服饰图的背景。
   */
  background?: string;
  /** 生成图片数量，默认 1。可选值：1, 2, 4 */
  num?: number;
}

export interface IDressInfo {
  /** 服饰图 URL */
  image: string;
  /**
   * 服饰类型。可选值：
   * - dresses: 连体衣
   * - upperBody: 上装
   * - lowerBody: 下装
   */
  type: 'dresses' | 'upperBody' | 'lowerBody';
}

export interface IDressSynthesisRequest extends IBaseRequest {
  /**
   * 模特图 URL。
   * 模特正面图，建议上传简单背景的图。
   */
  model: string;
  /** 服饰图信息列表 */
  dresses: IDressInfo[];
  /** 生成图片数量，默认 1。可选值：1, 2, 4 */
  num?: number;
}

// ================= 响应接口 =================

export interface ITaskResponse {
  /** 任务 ID，用于查询任务结果 */
  jobId: string;
}

export interface ICancelResponse {
  /** 是否成功 */
  success: boolean;
  /** 失败原因（仅取消失败时有值） */
  message?: string;
}

export interface IBackgroundItem {
  /** 背景 ID，用于商品图换背景接口 */
  id: string;
  /**
   * 背景分类。可选值：
   * - indoor: 室内
   * - outdoor: 室外
   * - simplicity: 简约
   */
  category: string;
  /** 背景图片 URL */
  image: string;
}

export interface IBackgroundListResponse {
  /** 背景列表 */
  bgs: IBackgroundItem[];
}

export interface IFaceItem {
  /** 模特脸 ID，用于 AI 模特接口 */
  id: string;
  /** 性别。可选值：Male (男), female (女) */
  gender: string;
  /** 肤色。可选值：yellow (黄色), white (白色), black (黑色) */
  skin: string;
  /** 年龄段。可选值：adult (成人), child (儿童) */
  age: string;
  /** 预览图 URL */
  preview: string;
}

export interface IFaceListResponse {
  /** 模特脸列表 */
  faces: IFaceItem[];
}
