export interface IBaseRequest {
    /** 请求ID，需保证唯一 (SDK会自动生成默认值) */
    requestId?: string;
}
export interface IText2ImgRequest extends IBaseRequest {
    prompt: string;
    style?: string;
    ar?: string;
    num?: number;
}
export interface IText2ImgProRequest extends IBaseRequest {
    prompt: string;
    ar?: string;
}
export interface IImg2ImgRequest extends IBaseRequest {
    prompt: string;
    crefImages: string[];
    crefImageWeight?: number;
    style?: string;
    ar?: string;
    num?: number;
}
export interface ISeamlessRequest extends IBaseRequest {
    prompt: string;
    style?: string;
    ar?: string;
    num?: number;
}
export interface ITransparentRequest extends IBaseRequest {
    prompt: string;
    style?: string;
    ar?: string;
    num?: number;
}
export interface IImg2TextRequest extends IBaseRequest {
    image: string;
}
export interface ITitleRequest extends IBaseRequest {
    image: string;
    prompt?: string;
}
export interface IMattingRequest extends IBaseRequest {
    image: string;
    type?: number;
    formats?: string[];
}
export interface ILineArtRequest extends IBaseRequest {
    image: string;
    prompt?: string;
}
export interface IUpscaleRequest extends IBaseRequest {
    image: string;
    type?: string;
    multiple?: number;
    denoise?: boolean;
}
export interface IRemoveRequest extends IBaseRequest {
    image: string;
    mask: string;
}
export interface IVectorRequest extends IBaseRequest {
    image: string;
    formats?: string[];
}
export interface IReimageRequest extends IBaseRequest {
    image: string;
    imageWeight: number;
    seamless?: boolean;
    prompt?: string;
    ar?: string;
    num?: number;
}
export interface IReimageProRequest extends IBaseRequest {
    image: string;
    similarity: number;
    type?: string;
    onlyPattern?: boolean;
    circle?: boolean;
    bgColor?: number;
    ar?: string;
    num?: number;
}
export interface ISeamlessProRequest extends IBaseRequest {
    type: number;
    image: string;
    prompt: string;
    ar?: string;
}
export interface IExpandRequest extends IBaseRequest {
    type: number;
    image: string;
    scale?: number;
    ar?: string;
}
export interface IDetectRequest extends IBaseRequest {
    image: string;
}
export interface IStyleTransferRequest extends IBaseRequest {
    type: number;
    style: string;
    image: string;
    returnMask?: boolean;
}
export interface IArtWordRequest extends IBaseRequest {
    prompt: string;
    ar?: string;
    num?: number;
}
export interface IGoodsInfo {
    url: string;
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface IBackgroundInfo {
    url: string;
    mask?: string;
    bgId?: string;
}
export interface IChangeBackgroundRequest extends IBaseRequest {
    width: number;
    height: number;
    goods: IGoodsInfo;
    background: IBackgroundInfo;
    productSmartColor?: boolean;
    referenceStrong?: boolean;
    num?: number;
}
export interface IModelSynthesisRequest extends IBaseRequest {
    model: string;
    faceId: string;
    background?: string;
    num?: number;
}
export interface IDressInfo {
    image: string;
    type: 'dresses' | 'upperBody' | 'lowerBody';
}
export interface IDressSynthesisRequest extends IBaseRequest {
    model: string;
    dresses: IDressInfo[];
    num?: number;
}
export interface ITaskResponse {
    jobId: string;
}
export interface ICancelResponse {
    success: boolean;
    message?: string;
}
export interface IBackgroundItem {
    id: string;
    category: string;
    image: string;
}
export interface IBackgroundListResponse {
    bgs: IBackgroundItem[];
}
export interface IFaceItem {
    id: string;
    gender: string;
    skin: string;
    age: string;
    preview: string;
}
export interface IFaceListResponse {
    faces: IFaceItem[];
}
