import Subject from "./Subject";

export default class SubjectMark {
  private subject: Subject;
  private mark: number | null;

  constructor(subject: Subject, mark: number) {
    if (mark < 0 || mark > 10) {
      throw new Error("Mark must be between 0 and 10");
    }
    this.subject = subject;
    this.mark = mark;
  }

  public getSubject() {
    return this.subject;
  }

  public getMark() {
    return this.mark || 0;
  }
}
