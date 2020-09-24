import { PersonInterface } from "../2-interface/PersonInterface";
import { Logger } from "./Logger";

export class Person {
  protected person;

  constructor(person: PersonInterface) {
    this.person = person;
    this.greet();
  }

  protected greet() {
    Logger.log(`Hello, my name is:`, this.person.name);
  }
}
