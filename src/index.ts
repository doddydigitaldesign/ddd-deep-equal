import { checkObjects } from "./lib/checkObjects";

export const deepEqual = (a: unknown, b: unknown): boolean => {
  // Strict equality implies deep equality
  if (a !== b) {
    // Type equality is a neccessary condition for deep equality
    if (typeof a === typeof b) {
      if (typeof a === "object" && typeof b === "object") {
        return checkObjects(a, b);
      }
    } else {
      // type mismatch
      return false;
    }
  } else {
    // a is strictly equal to b
    return true;
  }
  // return false by default
  return false;
};
export default deepEqual;
