import Chemistry from "./Chemistry";
import Mathematics from "./Mathematics";
import Physics from "./Physics";
import Subject from "./Subject";
import SubjectMark from "./SubjectMark";

export default class Student {
  private name: string;
  private id: string;
  // private subjects: Set<Subject>; // mon hoc dang ki thi
  private subjectMarks: Set<SubjectMark>; // diem mon hoc
  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
    this.subjectMarks = new Set();
  }

  public getName() {
    return this.name;
  }

  public getId() {
    return this.id;
  }

  public getSubjectMarks() {
    return this.subjectMarks;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setId(id: string) {
    this.id = id;
  }

  public setSubjectMarks(subjectMarks: Set<SubjectMark>) {
    this.subjectMarks = subjectMarks;
  }

  public addSubjectMark(subjectMark: SubjectMark) {
    if (this.subjectMarks.has(subjectMark)) {
      throw new Error("Subject mark already exists");
    }
    this.subjectMarks.add(subjectMark);
  }

  public getAverageMark() {
    const totalMark = Array.from(this.subjectMarks).reduce(
      (acc, subjectMark) =>
        acc + subjectMark.getMark() * subjectMark.getSubject().getCoefficient(),
      0
    );

    const totalCoefficient = Array.from(this.subjectMarks).reduce(
      (acc, subjectMark) => acc + subjectMark.getSubject().getCoefficient(),
      0
    );

    return (totalMark / totalCoefficient).toFixed(2);
  }

  public getMathMark() {
    return Array.from(this.subjectMarks)
      .find((subjectMark) => subjectMark.getSubject() instanceof Mathematics)
      ?.getMark();
  }

  public getPhysicsMark() {
    return Array.from(this.subjectMarks)
      .find((subjectMark) => subjectMark.getSubject() instanceof Physics)
      ?.getMark();
  }

  public getChemistryMark() {
    return Array.from(this.subjectMarks)
      .find((subjectMark) => subjectMark.getSubject() instanceof Chemistry)
      ?.getMark();
  }
}
