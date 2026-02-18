
import { russianUniversities } from "./russia";
import { University } from "./types";
import { otherUniversities } from "./otherUniversities";
import { turkishUniversities } from "./turkishUniversities";

export const universitiesList: University[] = [
  ...turkishUniversities,
  ...russianUniversities,
  ...otherUniversities,
];
