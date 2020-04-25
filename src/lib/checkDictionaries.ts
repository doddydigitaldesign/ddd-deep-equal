import { deepEqual } from "../index";
import { hasOwnProperty } from "./utils/hasOwnProperty";

export const checkDictionaries = (a: object, b: object): boolean => {
  if (a instanceof Object && b instanceof Object) {
    if (Object.isPrototypeOf.call(a, b) || Object.isPrototypeOf.call(b, a)) {
      return false;
    }

    if (a.constructor !== b.constructor) {
      return false;
    }
    const checkedProperties: boolean[] = [];
    for (const prop in a) {
      if (hasOwnProperty(a, prop) && hasOwnProperty(b, prop)) {
        if (a[prop] === b[prop]) {
          checkedProperties.push(true);
        } else {
          // Handle circular references
          if (a[prop] === b || b[prop] === a) {
            return false;
          }
          const eq = deepEqual(a[prop], b[prop]);
          checkedProperties.push(eq);
        }
      } else {
        return false;
      }
    }
    return checkedProperties.every((propCheck) => propCheck === true);
  } else {
    // a instanceof Object !== b instanceof Object
    return false;
  }
};
