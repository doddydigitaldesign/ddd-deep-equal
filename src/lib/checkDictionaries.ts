import { deepEqual } from "..";
import { hasOwnProperty } from "./utils/hasOwnProperty";

export const checkDictionaries = (a: object, b: object) => {
  const checkedProperties: boolean[] = [];
  for (const prop in a) {
    if (hasOwnProperty(a, prop) && hasOwnProperty(b, prop)) {
      const eq = deepEqual(a[prop], b[prop]);
      checkedProperties.push(eq);
    }
  }
  return checkedProperties.every((propCheck) => propCheck === true);
};
