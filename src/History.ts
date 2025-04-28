import Subject from "./Subject";

export default class History extends Subject {
  constructor(coefficient: number) {
    super("History", coefficient);
  }
}
