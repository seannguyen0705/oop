import ForeignLanguage from "./ForeignLanguage";

export default class Russian extends ForeignLanguage {
  constructor(coefficient: number) {
    super("Russian", "N2", coefficient);
  }
}
