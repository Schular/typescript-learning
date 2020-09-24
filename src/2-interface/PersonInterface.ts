import { SchoolType } from "./SchoolType";

export interface PersonInterface {
  name: string;
  age: number;
  studies: Array<SchoolType> | [];
}
