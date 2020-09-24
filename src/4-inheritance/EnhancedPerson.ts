import { Logger } from "../1-class/Logger";
import { Person } from "../1-class/Person";
import { PersonInterface } from "../2-interface/PersonInterface";

export class EnhancedPerson extends Person {
  constructor(person: PersonInterface) {
    super(person);
    this.person = person;
  }

  greet() {
    Logger.log(`Hello, I'm stupid and I know it:`, this.person.name);
  }
}
