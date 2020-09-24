import { Person } from "./1-class/Person";
import { EnhancedPerson } from "./4-inheritance/EnhancedPerson";
import { PersonObject } from "./4-inheritance/PersonObject";
import { Chicken, Velociraptor } from "./5-abstract/Animal";

new EnhancedPerson({
  name: "Dorelianu",
  age: 299,
  studies: [],
});

const implementedPerson = new PersonObject({
  name: "Doreliador",
  age: 29,
  studies: [],
});

new Person(implementedPerson);

const chicken = new Chicken("Mountain Roaster");
chicken.battleRoar();
chicken.run();

const velociraptopr = new Velociraptor("T-Velociraptopr");
velociraptopr.battleRoar();
velociraptopr.run();
