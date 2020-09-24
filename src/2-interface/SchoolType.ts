import { ProfileEnum } from "../3-enum/ProfileEnum";
import { Modify } from "../utils/types";

export interface GeneralSchool {
  name: "Școală primară" | "Școală gimnazială";
  grades: number;
  start: Date;
  end: Date;
}

export type HighSchool = Modify<
  GeneralSchool,
  {
    name: "Liceu";
    profile: ProfileEnum;
  }
>;

export type College = Modify<
  GeneralSchool,
  {
    name: "Facultate" | "Masterat" | "Doctorat";
    profile: ProfileEnum;
    diploma?: string;
  }
>;

export type SchoolType = GeneralSchool | HighSchool | College;
