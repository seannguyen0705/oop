import ForeignLanguage from "./ForeignLanguage";

export class English extends ForeignLanguage {
  constructor(coefficient: number) {
    super("English", "N1", coefficient);
  }
}
