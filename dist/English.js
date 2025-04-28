"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.English = void 0;
const ForeignLanguage_1 = __importDefault(require("./ForeignLanguage"));
class English extends ForeignLanguage_1.default {
    constructor(coefficient) {
        super("English", "N1", coefficient);
    }
}
exports.English = English;
