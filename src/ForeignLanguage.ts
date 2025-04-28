import Subject from "./Subject";

export default class ForeignLanguage extends Subject {
  private foreign_code: string;
  constructor(name: string, foreign_code: string) {
    super(name);
    this.foreign_code = foreign_code;
  }

  getForeignCode() {
    return this.foreign_code;
  }
}
