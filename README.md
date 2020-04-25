# ddd-deep-equal

A deep equal implementation for some common JavaScript types.

##### Usage

Install as a dependency:

```
npm i ddd-deep-equal
```

Use in your project:

```tsx
import { deepEqual } from "ddd-deep-equal";
const objA = {
  foo: "bar",
};
const objB = {
  foo: "bar",
};

console.log(deepEqual(objA, objB)); // true
```
