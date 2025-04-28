"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubjectMark {
    constructor(subject, mark) {
        if (mark < 0 || mark > 10) {
            throw new Error("Mark must be between 0 and 10");
        }
        this.subject = subject;
        this.mark = mark;
    }
    getSubject() {
        return this.subject;
    }
    getMark() {
        return this.mark || 0;
    }
}
exports.default = SubjectMark;
