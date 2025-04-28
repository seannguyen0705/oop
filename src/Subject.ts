export default abstract class Subject {
  protected name: string;

  public getName() {
    return this.name;
  }

  constructor(name: string) {
    this.name = name;
  }
}
