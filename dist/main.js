"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Biology_1 = require("./Biology");
const Chemistry_1 = __importDefault(require("./Chemistry"));
const Civics_1 = require("./Civics");
const Geography_1 = require("./Geography");
const Mathematics_1 = __importDefault(require("./Mathematics"));
const Physics_1 = __importDefault(require("./Physics"));
const Student_1 = __importDefault(require("./Student"));
const History_1 = __importDefault(require("./History"));
const English_1 = require("./English");
const Literature_1 = __importDefault(require("./Literature"));
const SubjectMark_1 = __importDefault(require("./SubjectMark"));
const math = new Mathematics_1.default();
const physics = new Physics_1.default();
const chemistry = new Chemistry_1.default();
const biology = new Biology_1.Biology();
const history = new History_1.default();
const geography = new Geography_1.Geography();
const civics = new Civics_1.Civics();
const english = new English_1.English();
const literature = new Literature_1.default();
const literature2 = new Literature_1.default();
const student = new Student_1.default("Nguyen Nhat Phap", "1234567890");
student.addSubject(math);
student.addSubject(physics);
student.addSubject(chemistry);
student.addSubject(biology);
student.addSubject(english);
student.addSubject(literature);
student.addSubject(literature2);
const subjectMarks = [
    new SubjectMark_1.default(math, 8),
    new SubjectMark_1.default(physics, 9),
    new SubjectMark_1.default(chemistry, 7),
    new SubjectMark_1.default(biology, 8),
    new SubjectMark_1.default(english, 8),
    new SubjectMark_1.default(literature, 8.5),
];
student.setSubjectMarks(new Set(subjectMarks));
const subjectMark = student.getSubjectMarks();
subjectMark.forEach((mark) => {
    console.log(mark.getSubject().getName(), mark.getMark());
});
console.log(student.getAverageMark());
