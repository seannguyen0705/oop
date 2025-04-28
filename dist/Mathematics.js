"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Subject_1 = __importDefault(require("./Subject"));
class Mathematics extends Subject_1.default {
    constructor(coefficient) {
        super("Mathematics", coefficient);
    }
}
exports.default = Mathematics;
