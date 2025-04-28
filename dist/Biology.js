"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biology = void 0;
const Subject_1 = __importDefault(require("./Subject"));
class Biology extends Subject_1.default {
    constructor(coefficient) {
        super("Biology", coefficient);
    }
}
exports.Biology = Biology;
