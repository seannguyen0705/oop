"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Subject_1 = __importDefault(require("./Subject"));
class Physics extends Subject_1.default {
    constructor(coefficient) {
        super("Physics", coefficient);
    }
}
exports.default = Physics;
