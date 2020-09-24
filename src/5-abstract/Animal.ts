import { Logger } from "../1-class/Logger";

export abstract class Animal {
  protected abstract battleRoar(): void;
  protected abstract legs: number;
  protected abstract name: string;

  run() {
    Logger.log(this.name, `running with ${this.name.length * this.legs}km/h`);
  }
}

export class Chicken extends Animal {
  protected legs = 2;
  protected name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  battleRoar() {
    Logger.log(this.name, `ready for cotcodak`);
  }
}

export class Velociraptor extends Animal {
  protected legs = 4;
  protected name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  battleRoar() {
    Logger.log(this.name, `ready for wraw`);
  }
}
