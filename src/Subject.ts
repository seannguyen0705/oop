export default abstract class Subject {
  protected name: string;

  // hệ số
  protected coefficient: number;

  public getName() {
    return this.name;
  }

  public getCoefficient() {
    return this.coefficient;
  }

  constructor(name: string, coefficient: number) {
    this.name = name;
    this.coefficient = coefficient;
  }
}
