"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynthesisService = void 0;
class SynthesisService {
    constructor(client) {
        this.client = client;
    }
    /**
     * 商品图换背景
     * 描述：根据商品图片和背景图，自动替换商品背景。
     * @param data 换背景请求参数
     * @returns 任务 ID
     */
    changeBackground(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/synthesis/change-background', data);
        });
    }
    /**
     * AI 模特
     * 描述：根据服饰图、模特脸 ID 和背景图，自动合成模特效果。
     * @param data AI 模特请求参数
     * @returns 任务 ID
     */
    modelSynthesis(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/synthesis/model', data);
        });
    }
    /**
     * AI 试衣
     * 描述：根据服饰图和模特图，自动合成试衣效果。
     * @param data AI 试衣请求参数
     * @returns 任务 ID
     */
    dressSynthesis(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/synthesis/dress', data);
        });
    }
    /**
     * 获取背景列表
     * 描述：查询商品图换背景可用的背景模板列表。
     * @returns 背景列表
     */
    getBackgrounds() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('GET', '/aigc/synthesis/change-background/bgs');
        });
    }
    /**
     * 获取模特脸列表
     * 描述：查询 AI 模特可用的模特脸列表。
     * @returns 模特脸列表
     */
    getFaces() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('GET', '/aigc/synthesis/model/faces');
        });
    }
}
exports.SynthesisService = SynthesisService;
