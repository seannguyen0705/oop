import Subject from "./Subject";

export default class Physics extends Subject {
  constructor(coefficient: number) {
    super("Physics", coefficient);
  }
}
