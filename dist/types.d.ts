export interface XLAIConfig {
    /** 应用ID */
    appId: string;
    /** 应用密钥 */
    secret: string;
    /** API 基础地址 */
    baseUrl?: string;
}
export interface XLAIResponse<T = any> {
    /** 状态码 */
    code: number;
    /** 消息 */
    message?: string;
    /** 数据 */
    data?: T;
}
/**
 * 文本生成图片参数
 */
export interface Text2ImgOptions {
    /** 提示词 */
    prompt: string;
    /** 负向提示词 */
    negative_prompt?: string;
    /** 宽度 */
    width?: number;
    /** 高度 */
    height?: number;
    /** 生成数量 */
    num_outputs?: number;
    /** 随机种子 */
    seed?: number;
    [key: string]: any;
}
/**
 * 商品图换背景参数
 */
export interface ChangeBackgroundOptions {
    /** 商品图片 URL 或 Base64 */
    product_image: string;
    /** 背景图片 URL 或 Base64 */
    background_image?: string;
    /** 背景描述提示词 */
    prompt?: string;
    [key: string]: any;
}
