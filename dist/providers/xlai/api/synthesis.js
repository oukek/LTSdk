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
    /** 商品图换背景 */
    changeBackground(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/synthesis/change-background', data);
        });
    }
    /** AI模特 */
    model(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/synthesis/model', data);
        });
    }
    /** AI试衣 */
    dress(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.postTask('/aigc/synthesis/dress', data);
        });
    }
    /** 查询背景列表 */
    getBackgrounds() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('GET', '/aigc/synthesis/change-background/bgs');
        });
    }
    /** 查询模特脸列表 */
    getFaces() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('GET', '/aigc/synthesis/model/faces');
        });
    }
}
exports.SynthesisService = SynthesisService;
