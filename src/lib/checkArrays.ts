import { deepEqual } from "..";

export const checkArrays = (a: unknown[], b: unknown[]): boolean => {
  const lenA = a.length;
  const lenB = b.length;
  if (lenA === lenB) {
    const checkedElements: boolean[] = [];
    for (let i = 0; i < lenA; i++) {
      const elA = a[i];
      const elB = b[i];
      const eq = deepEqual(elA, elB);
      checkedElements.push(eq);
    }
    return checkedElements.every((el) => el === true);
  } else {
    // array lengths differ
    return false;
  }
};
