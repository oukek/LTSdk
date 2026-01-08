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
exports.AIGCService = void 0;
class AIGCService {
    constructor(client) {
        this.client = client;
    }
    /** 文生图 */
    text2img(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/text2img', data);
        });
    }
    /** 文生图进阶版 */
    text2imgPro(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/text2imgPro', data);
        });
    }
    /** 图生图 */
    img2img(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/img2img', data);
        });
    }
    /** 无缝拼接图 */
    seamless(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/seamless', data);
        });
    }
    /** 免抠素材生成 */
    transparent(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/transparent', data);
        });
    }
    /** 图生文 */
    img2text(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/img2text', data);
        });
    }
    /** 商品图提取标题 */
    title(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/title', data);
        });
    }
    /** 智能抠图 */
    matting(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/matting', data);
        });
    }
    /** 线稿提取 */
    lineart(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/lineart', data);
        });
    }
    /** 无损放大 */
    upscale(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/upscale', data);
        });
    }
    /** 智能擦除 */
    remove(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/remove', data);
        });
    }
    /** 转矢量图 */
    vector(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/vector', data);
        });
    }
    /** 相似图裂变 */
    reimage(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/reimage', data);
        });
    }
    /** 相似图裂变进阶版 */
    reimagePro(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/reimage/pro', data);
        });
    }
    /** 四方连续图 */
    seamlessPro(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/seamless/pro', data);
        });
    }
    /** 扩图 */
    expand(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/expand', data);
        });
    }
    /** 图案裁剪 */
    detect(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/detect', data);
        });
    }
    /** 风格转绘 */
    styleTransfer(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/style-transfer', data);
        });
    }
    /** 艺术字生成 */
    artWord(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/art-word', data);
        });
    }
}
exports.AIGCService = AIGCService;
