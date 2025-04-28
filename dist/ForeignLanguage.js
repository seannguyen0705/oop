"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Subject_1 = __importDefault(require("./Subject"));
class ForeignLanguage extends Subject_1.default {
    constructor(name, foreign_code) {
        super(name);
        this.foreign_code = foreign_code;
    }
    getForeignCode() {
        return this.foreign_code;
    }
}
exports.default = ForeignLanguage;
