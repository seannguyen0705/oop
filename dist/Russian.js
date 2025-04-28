"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ForeignLanguage_1 = __importDefault(require("./ForeignLanguage"));
class Russian extends ForeignLanguage_1.default {
    constructor(coefficient) {
        super("Russian", "N2", coefficient);
    }
}
exports.default = Russian;
