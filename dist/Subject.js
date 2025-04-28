"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subject {
    getName() {
        return this.name;
    }
    getCoefficient() {
        return this.coefficient;
    }
    constructor(name, coefficient) {
        this.name = name;
        this.coefficient = coefficient;
    }
}
exports.default = Subject;
