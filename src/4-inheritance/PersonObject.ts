import { PersonInterface } from "../2-interface/PersonInterface";

export class PersonObject implements PersonInterface {
  public name;
  public age;
  public studies;

  constructor({ name, age, studies }: PersonInterface) {
    this.name = name;
    this.age = age;
    this.studies = studies;
  }
}
