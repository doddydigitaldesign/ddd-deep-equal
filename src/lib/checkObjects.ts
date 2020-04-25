import { checkArrays } from "./checkArrays";
import { checkDictionaries } from "./checkDictionaries";

export const checkObjects = (a: object | null, b: object | null) => {
  // Check if a,b are null
  if (a !== null && b !== null) {
    // Check constructor equality
    if (a.constructor === b.constructor) {
      // Check if a,b are arrays
      if (Array.isArray(a) && Array.isArray(b)) {
        return checkArrays(a, b);
      }
      // Check regular JS objects
      return checkDictionaries(a, b);
    } else {
      // a,b have different constructors
      return false;
    }
  } else {
    // a,b are null
    return true;
  }
};
