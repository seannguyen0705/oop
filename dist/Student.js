"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Chemistry_1 = __importDefault(require("./Chemistry"));
const Mathematics_1 = __importDefault(require("./Mathematics"));
const Physics_1 = __importDefault(require("./Physics"));
class Student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.subjectMarks = new Set();
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getSubjectMarks() {
        return this.subjectMarks;
    }
    setName(name) {
        this.name = name;
    }
    setId(id) {
        this.id = id;
    }
    setSubjectMarks(subjectMarks) {
        this.subjectMarks = subjectMarks;
    }
    addSubjectMark(subjectMark) {
        if (this.subjectMarks.has(subjectMark)) {
            throw new Error("Subject mark already exists");
        }
        this.subjectMarks.add(subjectMark);
    }
    getAverageMark() {
        const totalMark = Array.from(this.subjectMarks).reduce((acc, subjectMark) => acc + subjectMark.getMark() * subjectMark.getSubject().getCoefficient(), 0);
        const totalCoefficient = Array.from(this.subjectMarks).reduce((acc, subjectMark) => acc + subjectMark.getSubject().getCoefficient(), 0);
        return (totalMark / totalCoefficient).toFixed(2);
    }
    getMathMark() {
        var _a;
        return (_a = Array.from(this.subjectMarks)
            .find((subjectMark) => subjectMark.getSubject() instanceof Mathematics_1.default)) === null || _a === void 0 ? void 0 : _a.getMark();
    }
    getPhysicsMark() {
        var _a;
        return (_a = Array.from(this.subjectMarks)
            .find((subjectMark) => subjectMark.getSubject() instanceof Physics_1.default)) === null || _a === void 0 ? void 0 : _a.getMark();
    }
    getChemistryMark() {
        var _a;
        return (_a = Array.from(this.subjectMarks)
            .find((subjectMark) => subjectMark.getSubject() instanceof Chemistry_1.default)) === null || _a === void 0 ? void 0 : _a.getMark();
    }
}
exports.default = Student;
